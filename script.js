
class Filme {
    constructor(titulo, diretor, ano){
        this.titulo = titulo
        this.diretor = diretor
        this.ano = ano
    }
    getTitulo(){
        return this.titulo
    }
    getDiretor(){
        return this.diretor
    }
    getAno(){
        return this.ano
    }
    setTitulo(novoTitulo){
        this.titulo =novoTitulo
    }
    setDiretor(novoDiretor){
        this.diretor =novoDiretor
    }
    setAno(novoAno){
        this.ano = novoAno
    }
    mostrarDetalhes(){
        return this.getTitulo() + ' - ' + this.getDiretor() + ' (' + this.getAno()+ ') '
    }}
    
    function verficarTitulo(){ //verificar, início
        let titulo = document.getElementById('titulo').value
        if(titulo){
            return titulo
        }
        else{
            window.alert('Peencha o campo titulo!')
        }
    }
    function verificarDiretor(){
        let diretor = document.getElementById('diretor').value
        if(diretor){
            return diretor
        }
        else{
            window.alert('Preencha o campo diretor!')
        }
    }
    function verificarAno(){
        let ano = document.getElementById('ano').value
        if(ano){
            return ano
        }
        else{
            window.alert('Preencha o campo ano!')
        }
    } // verificar, fim

    function criarFilme(titulo, diretor, ano){
        if(titulo&& diretor&&ano){
            let filme = new Filme(titulo, diretor, ano)
            return filme
        }
    }
    function addLista(filme){
        let listaFilme = document.getElementById('lista');
        let pFilme = document.createElement('p');
        pFilme.textContent= filme.mostrarDetalhes();
        listaFilme.appendChild(pFilme);
        let form = document.getElementById('filme-form')
        form.reset()
    }
    add.addEventListener('click', ()=> addLista(criarFilme(verficarTitulo(), verificarDiretor(), verificarAno())))

    