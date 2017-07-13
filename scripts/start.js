var Modal = ReactBootstrap.Modal;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
const Collapse = ReactCollapse;

const TIPOREACTIVO = [
    {
        id: 0,
        data: "Pregunta"
    }, {
        id: 1,
        data: "Encabezado"
    }
];
const TIPOPREGUNTAS = [
    {
        id: 0,
        data: "Abierta"
    }, {
        id: 1,
        data: "Multiple"
    }
];
const STATUS = [
    {
        id: 0,
        data: "Habilitado"
    }, {
        id: 1,
        data: "Deshabilitado"
    }
];
const PERSONAS = [
    {
        id: 0,
        data: "Ninguno"
    }, {
        id: 1,
        data: "Niños menores de tres años "
    }, {
        id: 2,
        data: "Niños mayores de tres años "
    }, {
        id: 3,
        data: "Hogares"
    }
];
const ABIERTA = {
    "question": '¿',
    "answer": 'undefined'
} // init

///radio //checkbox // text //
const MULTIPLE = {
    "question": '¿',
    "options": [
        {
            "option": "a",
            "condition": 'A1',
            "type": 'checkbox'
        }, {
            "option": "b",
            "condition": 'A1',
            "type": 'checkbox'
        },
        {
            "option": "c",
            "condition": 'A1',
            "type": 'checkbox'
        }
    ],
    "answer": 'undefined'
}

moment.locale('es');
function App() {
    return (
        <div className="bg-full padding-top-10">
            <Instrumentos/>
        </div>
    );
}
ReactDOM.render(
    <App/>, document.getElementById('reactIntrumentsApp'));
/**
 * #Cargar el state
 * #Solo una vez
 * #setState
 * #Recive Props
 *
 * componentWillMount
 *
 * constructor(props){
    super(props);
   }

 * #Carga state
 * #Solo una vez
 * #setState
 * #Recive Props
 *
 * componentDidMount
 */