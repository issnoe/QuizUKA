using Infokilo.DataLayer;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Transactions;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using Infokilo.DataLayer;
namespace InfoKilo.WebApp.Miembros.IN.Admin
{
    public partial class AdminIN : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
/*Instrumento*********************************************************************************************************************************/
         //Insertar y actualizar
         [System.Web.Services.WebMethod]
        public static void saveIntrumento(int id, string nombre, string subtitulo, string prefijo, int estado, int orden, int aplicado)
        {
            Repository<Instrumentos> crudIntrumentos = new Repository<Instrumentos>();
            try
            {
                Instrumentos itemObject = new Instrumentos();
                if(id!=-1){
                    itemObject.id = id;
                }
                itemObject.nombre = nombre;
                itemObject.subtitulo = subtitulo;
                itemObject.prefijo = prefijo;
                itemObject.estado = estado;
                itemObject.orden = orden;
                itemObject.aplicado = aplicado;
                itemObject.fechaCreacion = DateTime.Now;
                using (TransactionScope tran = new TransactionScope())
                {
                  //  Boolean exist = crudIntrumentos.Retrieve(f => f.id == 1) != null;
                    if (id!=-1)
                    {
                        Instrumentos data = crudIntrumentos.Retrieve(u => u.id == id);
                        data.nombre = nombre;
                        data.subtitulo = subtitulo;
                        data.prefijo = prefijo;
                        data.estado = estado;
                        data.orden = orden;
                        data.aplicado = aplicado;
                        data.fechaCreacion = DateTime.Now;
                        crudIntrumentos.Update(data);
                    }
                    else
                    {
                        crudIntrumentos.Create(itemObject);
                    }
                    tran.Complete();
                }
            }
            catch (Exception es)
            {
                var exeption = es;
            }
        }
         ////Instrumento y modulos
        //Eliminar
         [System.Web.Services.WebMethod]
         public static void deleteIntrumento(int id)
         {
             Repository<Instrumentos> crudIntrumentos = new Repository<Instrumentos>();
             try
             {
                 using (TransactionScope tran = new TransactionScope())
                 {
                     //  Boolean exist = crudIntrumentos.Retrieve(f => f.id == 1) != null;
                     if (id != -1)
                     {
                         crudIntrumentos.Delete(crudIntrumentos.Retrieve(f => f.id == id));
                     }
                     tran.Complete();
                 }

             }
             catch (Exception es)
             {
                 var exeption = es;
             }
         }
/*Modulo*********************************************************************************************************************************/
         //Insertar y actualizar
         [System.Web.Services.WebMethod]
         public static void saveModulo(int id, int id_instrumento, string modulo, string prefijo, string leyenda, int estado, int orden)
         {
             Repository<Modulos> crudRepository = new Repository<Modulos>();
             try
             {
                 Modulos itemObject = new Modulos();
                 if (id != -1)
                 {
                     itemObject.id = id;
                 }
                 itemObject.id_instrumento = id_instrumento;
                 itemObject.modulo = modulo;
                 itemObject.prefijo = prefijo;
                 itemObject.leyenda = leyenda;
                 itemObject.estado = estado;
                 itemObject.orden = orden;
                 itemObject.fechaCreacion = DateTime.Now;
                 using (TransactionScope tran = new TransactionScope())
                 {
                     Boolean exist = crudRepository.Retrieve(f => f.id == id) != null;
                     if (exist)
                     {
                         Modulos data = crudRepository.Retrieve(u => u.id == id);

                         data.id_instrumento = id_instrumento;
                         data.modulo = modulo;
                         data.prefijo = prefijo;
                         data.leyenda = leyenda;
                         data.estado = estado;
                         data.orden = orden;
                         data.fechaCreacion = DateTime.Now;
                         crudRepository.Update(data);

                     }
                     else
                     {
                         crudRepository.Create(itemObject);
                     }

                     tran.Complete();
                 }

             }
             catch (Exception es)
             {
                 var exeption = es;
             }
         }
         ////Instrumento y modulos
         //Eliminar
         [System.Web.Services.WebMethod]
         public static void deleteModulo(int id)
         {
             Repository<Modulos> crudRepository = new Repository<Modulos>();
             try
             {

                 using (TransactionScope tran = new TransactionScope())
                 {
                     Boolean exist = crudRepository.Retrieve(f => f.id == id) != null;
                     if (exist)
                     {
                         crudRepository.Delete(crudRepository.Retrieve(f => f.id == id));

                     }


                     tran.Complete();
                 }

             }
             catch (Exception es)
             {
                 var exeption = es;
             }
         }

/*Reactivos*********************************************************************************************************************************/
         //Insertar y actualizar
         [System.Web.Services.WebMethod]
         public static int saveReactivos(int id, int id_instrumento, int id_modulo,string dataJson, int estado, int orden, int tipopregunta ,string estilo, string nota )
         {
             Repository<Reactivos> crudRepository = new Repository<Reactivos>();
             try
             {
                 Reactivos itemObject = new Reactivos();
                 if (id != -1)
                 {
                     itemObject.id = id;
                 }
                 itemObject.id_instrumento = id_instrumento;
                 itemObject.id_modulo = id_modulo;
                 itemObject.dataJson = dataJson;
                  itemObject.estado = estado;
                 itemObject.orden = orden;
                 itemObject.tipopregunta = tipopregunta;
                   itemObject.estilo = estilo;
                   itemObject.nota = nota;
            

                 
                 using (TransactionScope tran = new TransactionScope())
                 {
                     Reactivos data = crudRepository.Retrieve(u => u.id == id);
                     if (data !=null)
                     {
                         data.id_instrumento = id_instrumento;
                         data.id_modulo = id_modulo;
                         data.dataJson = dataJson;
                         data.estado = estado;
                         data.orden = orden;
                         data.tipopregunta = tipopregunta;
                         data.estilo = estilo;
                         data.nota = nota;

                     }
                     else
                     {
                         crudRepository.Create(itemObject);
                     }

                     tran.Complete();
                 }

             }
             catch (Exception es)
             {
                 var exeption = es;
                 return 400;
             }
             return 200;
         }
        
         //Eliminar
         [System.Web.Services.WebMethod]
         public static void deleteReactivo(int id)
         {
             Repository<Reactivos> crudRepository = new Repository<Reactivos>();
             try
             {

                 using (TransactionScope tran = new TransactionScope())
                 {
                     var data = crudRepository.Retrieve(f => f.id == id);
                     Boolean exist = (data != null);
                     if (exist)
                     {
                         crudRepository.Delete(crudRepository.Retrieve(f => f.id == id));

                     }


                     tran.Complete();
                 }

             }
             catch (Exception es)
             {
                 var exeption = es;
             }
         }

        












        
        ////Instrumento con modulos
        //Obtener Intrumento 
        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public static List<Instrumentos> getInstrumentos()
        {
            Repository<Instrumentos> crudIntrumentos = new Repository<Instrumentos>();
            crudIntrumentos.GetAll();

            List<Instrumentos> lista = new List<Instrumentos>();
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.AppSettings["connectionStringClasses"].ToString()))
            {
                SqlCommand command = new SqlCommand("SELECT  instrumentos.* ,(select * from  modulos where instrumentos.id = modulos.id_instrumento FOR JSON PATH) as modulos FROM instrumentos", conn);

                try
                {
                    conn.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {

                            Instrumentos item = new Instrumentos();
                            item.id= Convert.ToInt32(reader[0].ToString());
                            try
                            {
                                item.nombre = reader["nombre"].ToString();
                                item.subtitulo = reader["subtitulo"].ToString();
                                item.prefijo = reader["prefijo"].ToString();
                                item.estado = Convert.ToInt32(reader["estado"].ToString());
                                item.orden = Convert.ToInt32(reader["orden"].ToString());
                                item.aplicado = Convert.ToInt32(reader["aplicado"].ToString());
                            }
                            catch (Exception exx)
                            {
                                Console.WriteLine(exx.Message);
                               
                            }
                           
                            try
                            {
                                item.fechaCreacion = Convert.ToDateTime(reader["fechaCreacion"].ToString());
                            }
                            catch (Exception ex)
                            {
                                Console.WriteLine(ex.Message);
                                
                            }
                           
                            item.modulos = reader["modulos"].ToString();

                            if (item.nombre != "") {
                                lista.Add(item);
                            }
                            
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
          
            return lista ;
            
        
       
            }

        //Obtener Intrumento 
       [System.Web.Services.WebMethod]
        public static List<Instrumentos> getInstrumentoId(int id)
        {
            //Repository<Instrumentos> crudIntrumentos = new Repository<Instrumentos>();
            //crudIntrumentos.GetAll();

            List<Instrumentos> lista = new List<Instrumentos>();
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.AppSettings["connectionStringClasses"].ToString()))
            {
                SqlCommand command = new SqlCommand("SELECT  instrumentos.* ,(select * from  modulos where instrumentos.id = modulos.id_instrumento FOR JSON PATH) as modulos FROM instrumentos where instrumentos.id ="+id, conn);
                try
                {
                    conn.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {

                            Instrumentos item = new Instrumentos();
                            item.id = Convert.ToInt32(reader[0].ToString());
                            try
                            {
                                item.nombre = reader["nombre"].ToString();
                                item.subtitulo = reader["subtitulo"].ToString();
                                item.prefijo = reader["prefijo"].ToString();
                                item.estado = Convert.ToInt32(reader["estado"].ToString());
                                item.orden = Convert.ToInt32(reader["orden"].ToString());
                                item.aplicado = Convert.ToInt32(reader["aplicado"].ToString());
                            }
                            catch (Exception exx)
                            {
                                Console.WriteLine(exx.Message);

                            }

                            try
                            {
                                item.fechaCreacion = Convert.ToDateTime(reader["fechaCreacion"].ToString());
                            }
                            catch (Exception ex)
                            {
                                Console.WriteLine(ex.Message);

                            }

                            item.modulos = reader["modulos"].ToString();

                            if (item.nombre != "")
                            {
                                lista.Add(item);
                            }

                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            return lista;



        }


        //Obtener Modulos con preguntas
         [System.Web.Services.WebMethod]
       public static List<Modulos> getReactivosbyModuloId(int id)
       {
           List<Modulos> lista = new List<Modulos>();
           
           using (SqlConnection conn = new SqlConnection(ConfigurationManager.AppSettings["connectionStringClasses"].ToString()))
           {
               string query = "SELECT modulos.* ,(select * from  reactivos where modulos.id = reactivos.id_modulo  FOR JSON PATH ) as reactivos FROM modulos where modulos.id ="+id;
               SqlCommand command = new SqlCommand(query, conn);
               try
               {
                   conn.Open();
                   using (SqlDataReader reader = command.ExecuteReader())
                   {
                       while (reader.Read())
                       {

                           Modulos item = new Modulos();
                           item.id = Convert.ToInt32(reader["id"].ToString());
                           try
                           {
                               item.id_instrumento = Convert.ToInt32(reader["id_instrumento"].ToString());

                           }
                           catch (Exception es)
                           {
                           }
                           
                           try
                           {
                               item.modulo = reader["modulo"].ToString();
                               item.leyenda = reader["leyenda"].ToString();
                               item.prefijo = reader["prefijo"].ToString();
                               item.estado = Convert.ToInt32(reader["estado"].ToString());
                               item.orden = Convert.ToInt32(reader["orden"].ToString());

                              
                           }
                           catch (Exception exx)
                           {
                              // Console.WriteLine(exx.Message);

                           }

                           try
                           {
                               item.fechaCreacion = Convert.ToDateTime(reader["fechaCreacion"].ToString());
                           }
                           catch (Exception ex)
                           {
                               //Console.WriteLine(ex.Message);

                           }

                           item.reactivos = reader["reactivos"].ToString();

                           if (item.modulo != "")
                           {
                               lista.Add(item);
                           }

                       }
                   }
               }
               catch (Exception ex)
               {
                   Console.WriteLine(ex.Message);
               }
           }

           return lista;
       }
      

    }
   
}