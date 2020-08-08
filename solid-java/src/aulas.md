# Aula 1

### Coesão e o SRP (ela tem uma única responsabilidade)

Classes coesas são mais fáceis de ler, mais reuso, mais simples, tem menos código e não precisa abrir ela e modificar o tempo todo. Só abrimos ela quando precisamos mudar regra ou algum problema ocorrer. Classe focada.
 
- "Uma classe coesa é aquela que contém apenas uma única responsabilidade. Ou seja, ela toma conta de apenas um conceito dentro do sistema."
- "Classes que não são coesas geralmente possuem muitos comportamentos (métodos). Além disso, elas também tem a tendência de crescer pra sempre, ou seja, o tempo inteiro o desenvolvedor tem que por a mão para escrever mais código."
- "Uma classe não coesa contém muitas diferentes responsabilidades. A ideia é então separar essas responsabilidades em classes diferentes."

# Aula 2

### Acoplamento e estabilidade

Acoplamento é ruim, pois quando tenho um classe que depende de outras, a mudança nessas classes irá impactar. 
É importante se acoplar a classes estáveis, que não mudam quase nunca.

- Acoplamento eferente: eu classe dependo de outras
- Acoplamento aferente: quem depende de mim
- "O problema do acoplamento é que, a partir do momento que uma classe A depende de uma classe B, qualquer mudança em B pode impactar A. Ou seja, quanto mais dependermos de outras classes, mais chances temos de uma mudança na dependência afetar a classe dependente. E, como sabemos, na prática, temos classes que mudam com muita frequência."
- "Classes estáveis são aquelas que tendem a mudar muito pouco. A vantagem de classes como essas é que são ótimas classes para se depender, já que elas não propagarão mudança para as classes dependentes." 
- "Classes estáveis são aquelas que geralmente já são dependidas por muitas outras classes do sistema. Um bom exemplo disso são interfaces, pois elas geralmente possuem muitas implementações, e aí isso faz com que o desenvolvedor pense melhor antes de sair mudando a interface."

# Aula 3

### Classes abertas, Open Closed e Dependency Inversion Principles

- "O OCP diz para escrevermos classes que sejam facilmente extensíveis (ou seja, abertas pra extensão). Dessa forma, mudar o comportamento da classe atual é fácil: basta passar outras implementações concretas das abstrações que ela depende."
- "Classes abertas para extensão, mas fechadas para modificação, também são mais coesas."
- "O DIP nos diz para sempre dependermos de módulos que sejam mais estáveis que o módulo corrente. Abstrações devem depender de abstrações, e implementação deve depender de abstração. Com isso, diminuímos o risco do acoplamento, afinal abstrações são estáveis, e tendem a não mudar frequentemente, diminuindo a propagação de problemas."

# Aula 4

### Entendendo encapsulamento

Encapsular é esconder os detalhes da implementação dentro da classe. Dessa forma, as classes que farão uso dela, não saberão como ela funciona internamente. A vantagem disso é que conseguimos depois facilmente alterar a implementação, sem que ela impacte nas classes dependentes.

- "'Consigo saber COMO a classe está implementando essa regra de negócio?'. Se a resposta for sim, então aquele comportamento não está bem encapsulado."
- "A Lei de Demeter, de maneira simples, diz para que você evite ao máximo fazer expressões como a.getB().getC().getD().acao(). O problema dessa cadeia, é que a classe que contém essa expressão, conhece muito sobre o comportamento da classe A, depois da classe B, até D. Se alguma delas mudar, a mudança será propagada para muitos lugares. Diminuir a quantidade de invocações como essas ajuda você a encapsular melhor o comportamento e o funcionamento interno das classes."
   

# Aula 5

### Herança e o Liskov Substitutive Principle

- No uso da herança, o desenvolvedor deve pensar em cada método que a classe filha herdou e sobrescreveu, e lembrar que as pré-condições não podem ser apertadas, e as pós-condições não podem serem afrouxadas. Isso não é tão simples, e requer muito raciocínio do desenvolvedor, sempre que for reescrever um comportamento.

- Você pode fazer uso de composição para reaproveitar comportamentos. Diferente da herança, ao compor um objeto, você não precisa se preocupar com as pré e pós condições. No entanto, ao fazer uso de herança, você ganha o uso de polimorfismo. Quando bem usada, a herança também é uma excelente opção.


    


