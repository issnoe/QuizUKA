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
        }, {
            "option": "c",
            "condition": 'A1',
            "type": 'checkbox'
        }
    ],
    "answer": 'undefined'
}

moment.locale('es');

var showAuthorInfo = function () {
    alert("kdjs")
};

var App = React.createClass({
    getInitialState: function () {
        return {routerPath: "home"};
    },
    listBooks: function () {
        alert("se debe de mostrar el panel")
    }.bind(this),
    listBooksid: function (id) {
        alert("se debe de mostrar el panel" + id)
    }.bind(this),
    componentDidMount: function () {
        var setState = this.setState;
        var router = Router({
            '/': setState.bind(this, {routerPath: "home"}),
            '/modulo': this.listBooks,
            '/modulo/:id': setState.bind(this, {routerPath: "modulo"})
        });
        router.init('/');
    },
    render: function () {

        var renderConteiner;

        switch (this.state.routerPath) {
            case "home":
                renderConteiner = (<Instrumentos/>);
                break;
            case "modulo":
                renderConteiner = (
                    <h1>Modulo</h1>
                );
                break;
            default:
                renderConteiner = (
                    <div className="spinner"></div>
                );
                break;
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <ol className="breadcrumb">
                                <li>
                                    <a href="#">Inicio</a>
                                </li>
                                <li >
                                    <a href="#">Administrador de Instrumentos</a>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
                < div className="bg-full padding-top-10">
                    {renderConteiner}
                </div>
            </div>
        )

    }
});

ReactDOM.render(
    <App/>, document.getElementById('reactIntrumentsApp'));