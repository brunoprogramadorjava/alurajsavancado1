class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adicionar', 'removerTodas'])

        this._mensagemView = new MensagemView($('#mensagemView'));
        
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto'])
    }
    
    adicionar(event) {

        event.preventDefault();
        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._limparFormulario();
    }

    removerTodas() {

        this._listaNegociacoes.removerTodas();
        this._mensagem.texto = "Negociacoes apagadas com sucesso";
    }

    _criarNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limparFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputQuantidade.focus();
    }
}