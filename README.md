# Revisao-Prova-2

1. A propriedade global NaN é um valor especial que significa Not-A-Number (não é um número), representa um valor que não pode ser interpretado como um número válido. Um exemplo é ao usar para dividir 0/0, onde o resultado é NaN.

2. Existe o tipo Inline, Interno e Externo. A principal diferença deles é no escopo e organização do código, Inline para estilos específicos, Interno para uma única página e externo para estilos reutilizáveis em múltiplas páginas.

3. A etiqueta <span> geralmente é usada para agrupar elementos em linha em um documento, como exemplo, usar para colocar estilos em uma mesma linha, somente àquela frase.
   A tag <div> geralmente é utilizada para criar uma divisão ou uma seção em um documento HTML, como exemplo, usar para colocar estilo em uma seção inteira selecionada.

4. O elemento HTML <head> providencia informações gerais (metadados) sobre o documento, incluindo seu título e links para scripts e folhas de estilos.
Elementos: <title>, <meta>, e <link>

5. A principal diferença entre a lista ordenada e a lista não-ordenada está na maneira com que os itens de cada lista são apresentados - a lista ordenada enumera os elementos; a lista não-ordenada coloca marcadores antes de cada elemento.
Listas ordenadas (<ol>) são para, como exemplo, passos de uma receita, onde há uma sequência a ser seguida.
Listas não ordenadas (<ul>) são para, como exemplo, uma lista de compras, onde não há uma sequência a ser seguida.

6. A propriedade display no CSS define como um elemento HTML é exibido na página. 
Elementos com display INLINE, como o próprio nome diz, são elementos que se mantém em linha, ou seja, se você tiver vários elementos com display: inline seguidos, eles se manterão na mesma linha, um do lado do outro.
Elementos com display BLOCK, também com um nome bem semântico, são elementos que se comportam como um “bloco” na página, cuja largura sempre vai ocupar 100% da largura do elemento-pai.
Elementos com display INLINE-BLOCK vão se manter posicionados um ao lado do outro, sem quebras de linhas comportamento do inline, mas te dão a liberdade de atribuir a eles width, height, margins e paddings comportamento do block.

7. O Box Model é um conceito fundamental que descreve como os elementos HTML são representados e renderizados como caixas retangulares na página

Content:
É a área onde o conteúdo do elemento é exibido, como texto, imagens, etc.
Padding:
É o espaço ao redor do conteúdo, dentro da borda. Serve para afastar o conteúdo da borda.
Border:
É a linha que envolve o conteúdo e o preenchimento. Define o limite visual da caixa.
Margin:
É o espaço ao redor da borda, fora da caixa. Serve para afastar a caixa de outros elementos na página. 

8. <header>:
Define o cabeçalho de um documento ou seção. Pode conter títulos, logotipo, menus de navegação, etc. 

<section>:
Representa uma seção temática dentro de um documento. Capítulos, Introdução, Itens de notícias, Informações de contato.

<article>:
Destaca conteúdo autônomo, como um post de blog ou artigo, que pode ser lido independentemente do restante da 
página. Postagens do fórum, Postagens de blog, Comentários do usuário, Cartões de produtos, Artigos de jornal

<footer>:
Define o rodapé de um documento ou seção, geralmente contendo informações de contato, direitos autorais, etc. Informações de autoria, informações de direitos autorais, informações de contato, mapa do site, voltar aos links principais, documentos relacionados.

9. O atributo target="_blank" faz com que o link seja aberto em uma nova aba ou janela do navegador, ao invés de substituir o conteúdo da página atual. Isso permite que o usuário mantenha a página original aberta enquanto explora o conteúdo do link em uma nova aba. Deve-se estar atento a possíveis vulnerabilidades de segurança, principalmente ao vincular a sites externos.

10. A propriedade flex do CSS, define como um ítem será posicionado para no espaço disponível dentro de seu container. É usada para definir como os itens flexíveis crescem, encolhem e ocupam o espaço disponível em um layout flexbox. 

11. As transições permitem criar efeitos de animação suaves quando propriedades de um elemento são alteradas, suavizam a transição entre dois estados de uma propriedade, em vez de simplesmente mudar instantaneamente. Um exemplo é usar transition para criar a transição ao passar o mouse por cima de um botão.

16.  Variáveis declaradas com var fora de qualquer função são acessíveis em todo o código, enquanto dentro de uma função, são acessíveis apenas dentro dessa função.
Variáveis let são acessíveis apenas dentro do bloco onde foram declaradas, é definido por chaves.
Const, escopo de bloco, assim como let, porém,variáveis const não podem ser atualizadas nem declaradas novamente. São usadas para valores constantes. No entanto, se a variável for um objeto, seus membros podem ser modificados, mas a variável não pode ser reatribuída a um objeto diferente.

17. Será impresso: 1) x = undefined
15
25
30
100
200
300
100

e logo após imprimir isso, ocorrerá o erro, "ReferenceError: b is not defined", após o console.log(typeof b);

18. Java é uma linguagem compilada para a JVM, de tipagem estática, usada para aplicações robustas e multiplataforma.
JavaScript é uma linguagem interpretada, de tipagem dinâmica, criada para interatividade em páginas web e hoje usada também no back-end.

19. == (Igual a):
Compara valores após converter ambos os operandos para um tipo comum. Se os valores forem considerados iguais após a conversão, o resultado é true. 

Para x= 10 temos que :
x ==     8  -> retorna false
x ==   10   -> retorna true
x ==  "10" -> retorna true

=== (Estritamente igual a):
Compara valores e seus tipos. Se ambos forem iguais, o resultado é true. Caso contrário, o resultado é false, mesmo que os valores possam ser considerados iguais pela comparação com ==. 

Para x= 10 temos que :
x ===    8  -> retorna false
x ===   10   -> retorna true
x ===  "10" -> retorna false

20. Operadores lógicos são símbolos usados para combinar ou modificar expressões booleanas (que resultam em verdadeiro ou falso). 

&& (AND, E): O operador && retorna verdadeiro apenas se ambas as expressões conectadas forem verdadeiras. Caso contrário, retorna falso. 

|| (OR, OU): O operador || retorna verdadeiro se pelo menos uma das expressões conectadas for verdadeira. Ele retorna falso apenas se ambas as expressões forem falsas. 

! (NOT, NÃO): O operador ! inverte o valor booleano de uma expressão. Se a expressão for verdadeira, !expression retorna falso, e vice-versa. 

21. Sim, é possível adicionar novas propriedades a um objeto JavaScript mesmo depois de ele ter sido criado. Isso pode ser feito usando a notação de ponto. 
Notação de Ponto:
É a forma mais comum de acessar e modificar propriedades de um objeto. Para adicionar uma nova propriedade, basta usar o nome do objeto seguido de um ponto, o nome da nova propriedade e o valor a ser atribuído. 

22. Undefined: 
Variável declarada mas não inicializada. É o valor padrão que o JavaScript atribui automaticamente a variáveis não definidas

Null: 
Valor atribuído intencionalmente para indicar que uma variável não aponta para nenhum objeto válido. É uma forma de "esvaziar" uma variável.

23. É uma estrutura de dados que armazena informações como pares chave-valor, onde cada chave (ou propriedade) está associada a um valor. É declarado com chaves, {}. Como exemplo, o nome, idade e cidade de uma pessoa, 
let pessoa = {
  nome: "Luis",
  idade: 25,
  cidade: "São Paulo"
