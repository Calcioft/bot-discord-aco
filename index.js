const Discord = require("discord.js"); //baixar a lib
const jimp = require('jimp')
const client = new Discord.Client(); 
const config = require("./config.json"); 
const streamOptions = {seek: 0, volume: 1};
const toApng = require('gif-to-apng')
const download = require('download-file')
var mensagem = new Object
var count = new Number();
var num
var cara
let tocando = 0;
let prontoTocar = false;
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');



//hosteando

const hosting = false;

//Boas Vindas

client.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("388732492166725653");
  let channel = client.channels.cache.get("756900700016869436");
  let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'luladance');


  if(guild != member.guild){
    
  } else{

    let embed = new Discord.MessageEmbed()
    .setColor('#9149ee')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle('Bem Vindo(a)!')
    .setImage('https://media1.tenor.com/images/225d293b0645de03bd6101703107fbb7/tenor.gif?itemid=13742928')
    .setDescription('Seja bem vindo ao servidor!')  
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    await channel.send(embed)
    message.author.send(embed);

  }



})


//Boas Vindas

client.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("651160642471985162");
  let channel = client.channels.cache.get("681985389732560907");
  let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'luladance');


  if(guild != member.guild){
    
  } else{

    let embed = new Discord.MessageEmbed()
    .setColor('#9149ee')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle('Bem Vindo(a)!')
    .setImage('https://media1.tenor.com/images/225d293b0645de03bd6101703107fbb7/tenor.gif?itemid=13742928')
    .setDescription('Seja bem vindo ao servidor!')  
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    await channel.send(embed)
    message.author.send(embed);
  }



})

//Boas Vindas

client.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("678668652261802014");
  let channel = client.channels.cache.get("757353064054128831");
  let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'luladance');


  if(guild != member.guild){
    
  } else{

    let embed = new Discord.MessageEmbed()
    .setColor('#9149ee')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle('Bem Vindo(a)!')
    .setImage('https://media1.tenor.com/images/225d293b0645de03bd6101703107fbb7/tenor.gif?itemid=13742928')
    .setDescription('Seja bem vindo ao servidor!')  
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    await channel.send(embed)
    message.author.send(embed);
  }



})


//função sleep

function sleep(milliseconds) {

  var start = new Date().getTime();
  for (var i = 0; i <1e7; i++){
    if((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

//inicializador

client.on("ready", () => {
  m = 0;
  h = 0;
  d = 0;
  let scount = client.guilds.size;
  var memcount = client.users.size;
  console.log(`Bot foi iniciado em ` + scount + ' servers' ); 
  setInterval(() => {

    if(m == 60){

      m = 0;
      h = h + 1;

    }

    if(h == 24){

      d = d + 1;
      h = 0;

    }

    if(m % 2 === 0 ){

      client.user.setActivity(' a ' + d + ' dias ' + h + ' h ' + m + ' min. Seguidos', {type: 3});
    
      m = m + 1;

    } else {  

        client.user.setActivity('*help - Para Comandos, PAI TÁ ONLINE DEMAIS', {type: 0});

        m = m + 1;


    }
  }, 60000);


 //client.user.setPresence({ game: { name: 'comando', type: 3} });
 //0 = Jogando
 //  1 = Transmitindo
 //  2 = Ouvindo
 //  3 = Assistindo


  
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  

  // comando ping
  if(comando === "ping") {
  
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
  
// comando jacale

if(comando === "jacale") {
  
  
  message.reply("Cala a boca jacalé",  {files :["jare.jpg"]});
  
  
  
}

  //comando hora
  if(comando === "hora"){

    now = new Date
    hora = now.getHours()
    min = now.getMinutes()
    sec = now.getSeconds()

    const m = await message.channel.send("Agora são " + hora + " horas " + min + " minutos e " + sec + " segundos no meu host");
  

  }

  // comando oleo
  if(comando === "oleo") {
    
    now = new Date
    hora = now.getHours()
    min = now.getMinutes()
    sec = now.getSeconds()


    var horabrasil = hora - 3;

    if(hora === 3){

      horabrasil = 0;
    }

    if(horabrasil == -1){

      horabrasil = 23;
    }
    if(horabrasil == -2){

      horabrasil= 22;
    }
    if(horabrasil == -3){

      horabrasil = 21;
    }
   
    h = 23 - horabrasil;
    mi = 59 - min;
    s = 60 - sec;


    const m = await message.channel.send("Faltam " + h + " horas " + mi + " minutos e " + s + " segundos para o Horário Oficial do Óleo de Macaco", {files :["oleo.jpg"]} );
  }


  const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);

    // comando ahe
    if(comando === "ahe" ) {

      message.channel.send('Processando...');
    
    
      let fonte = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
      let fonte2 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
      
      var ranimage

      randomNumber = Math.floor(Math.random() * (24 -1) + 1);

      ranimage = 'ahe/ahe' + randomNumber + ".png";

      let avatar = await jimp.read(ranimage)
      

      avatar. resize(420, 420)

      
     var msgsf = '';

      for(i=1; i<12; i++){

        if(msgs[i] === undefined){

          msgs[i] = " ";
        }

        msgsf = msgsf + msgs[i] + " ";
        
    
      }
    

      var numblol = 0;

      for(i=1 ; i<11; i = i + 2){

        avatar.print(fonte2, 0, (20 + numblol), msgs [i] + " " + msgs [i+1] ). write('ahezin.png')
        avatar.print(fonte, 5, (20 + numblol),  msgs [i] + " " + msgs [i+1]). write('ahezin.png')

        numblol = numblol + 50;
      
        
      }
    


      message.channel.send('', {files :["ahezin.png"]});

    }


  //comando soco
  if(comando === "soco"){


    message.reply("deu uma pirocada em  " + msgs[1], {files :["pirocada.gif"]});
    

  }


    //comando bundada
    if(comando === "bundada"){


      message.reply("deu uma bundada em  " + msgs[1], {files :["gay.jpg"]});
      
  
    }

    //comando cancelado
    if (comando === "cancelado"){

      randomNumber = Math.floor(Math.random() * (21 -1) + 1);

      if(randomNumber == 1){

        message.reply("foi cancelado por ser talarico");
        
      }

      if(randomNumber == 2){

        message.reply("foi cancelado por que fede muito");
        
      }

      if(randomNumber == 3){

        message.reply("foi cancelado por ser mulher");
        
      }

      if(randomNumber == 4){

        message.reply("foi cancelado por ser Gay ativo");
        
      }

      if(randomNumber == 5){

        message.reply("foi cancelado por ser Gay passivo");
        
      }

      if(randomNumber == 6){

        message.reply("foi cancelado por ser um fãn do Xandão");
        
      }

      if(randomNumber == 7){

        message.reply("foi cancelado por ser corno");
        
      }

      if(randomNumber == 8){

        message.reply("foi cancelado por ser gostoso(a)");
        
      }

      if(randomNumber == 9){

        message.reply("foi cancelado por se um(a) merda ");
        
      }

      if(randomNumber == 10){

        const m = await message.channel.send("Felizmente você não foi cancelado" );
        
      }


      if(randomNumber == 11){

        message.reply("foi cancelado por ser Gay passivo");
        
      }

      if(randomNumber == 12){

        message.reply("foi cancelado por ser agiota");
        
      }

      if(randomNumber == 13){

        message.reply("foi cancelado por postar foto com nargilé");
        
      }

      if(randomNumber == 14){

        message.reply("foi cancelado por pegar menor de idade");
        
      }

      if(randomNumber == 15){

        message.reply("foi cancelado por ouvir Kpop ");
        
      }

      if(randomNumber == 16){

        message.reply("foi cancelado por Jogar LoL ");
        
      }

      if(randomNumber == 17){

        message.reply("foi cancelado por Bater Punheta");
        
      }
      if(randomNumber == 18){

        message.reply("foi cancelado por mentir pra caralho");
        
      }

      if(randomNumber == 19){

        message.reply("foi cancelado por ser a fell");
        
      }

      if(randomNumber == 20){

        message.reply("foi cancelado por ser furry");
        
      }

      

    }


    //comandos de join

    if(comando === "join"){

      if(message.member.voice.channel){
        message.member.voice.channel.join();
        prontoTocar = true;
    

      }else{
        message.channel.send('Entra em um canal de voz ai amigão');
      }

    }

    //comandos de leave

    if(comando === "leave"){

      if(message.member.voice.channel){
        message.member.voice.channel.leave();
        tocando = 0;

      }else{
        message.channel.send('Entra em um canal de voz ai amigão');
      }

    }

    //comandos safada

    if(comando === "ahjdsvahjv"){

      const n = await message.channel.send('https://cdn.discordapp.com/attachments/701543070369579128/757373421087883334/17.png');

    }


    //comados say
    if(comando === "say"){

      var msgsf = '';

      var nummensagens = 1;

      for(i=0; i<100; i++){

        if(msgs[nummensagens] === undefined){

          msgs[nummensagens] = " ";
        }

        msgsf = msgsf + msgs[nummensagens] + " ";
        
        nummensagens = nummensagens + 1;

      }

      const n = await message.channel.send(msgsf);
    

    
    }

    //comando dado
    if(comando === "dado"){

      var dado = msgs[1];

      randomNumber = Math.floor(Math.random() * (dado -1) + 1);

      if(isNaN(randomNumber)){

        if(msgs[1] === "em"){

          if(msgs[2] === "casa"){

            message.reply("tem");

          }
        }else{

          message.reply("Manda um número ai comédia");

        }

        

      }else{

       
        //const n = await message.channel.send( "resultado do d" + dado + " = " + "**" +randomNumber + "**");
         message.reply("resultado do d" + dado + " = " + "**" +randomNumber + "**");

      }




    }

    //comando livrarbarra

    if(comando === "livrarbarra"){

      const n = await message.channel.send("Em caso de investigação policial, eu declaro que não tenho envolvimento com essa página e não sei como estou na mesma, provavelmente fui inserido por terceiros, declaro que estou disposto a colaborar com as investigações e estou disposto a me apresentar a depoimento se necessário, declaro que sou completamente inocente e não tenho envolvimento nenhum com este caso mostrado neste servidor específico.");

    }
   
      //comando moderação

      if(comando === "moderador"){

        const n = await message.channel.send("O mod é corno e não se responsabiliza caso você se sinta ofendido");
  
      }


      //comando alarme

      if(comando === "alarme"){


        var testahora = 1;
        var testaminuto = 1;

        let horaemnum = parseInt(msgs[1]);
        let mimemnum = parseInt(msgs[2]);

        const voiceChannel = message.member.voice.channel;

        if(isNaN(horaemnum)){

          console.log('é numero')

          if(msgs[1]>= 1 && msgs[1] <= 24){

            

            testahora = 1;

          }

          
        }

        if(isNaN(mimemnum)){

          console.log('é tambpem')

          if(msgs[2]>= 0 && msgs[2] <= 59){

            testaminuto = 1;
            
          }

          
        }

        if(message.member.voice.channel){


          if (testahora == 1){
            
            if(testaminuto == 1){

              const n = await message.channel.send('Alarme setado para ' + msgs[1] + ' horas e '+ msgs[2]+ ' minutos.');

              setInterval(() => {

                now = new Date
                hora = now.getHours()
                min = now.getMinutes()
                sec = now.getSeconds()
            
                if(hosting == true){
    
                  var horabrasil = hora - 3;
    
                }else{
                  
                  var horabrasil = hora;
    
                }
    
                
            
                if(hora === 3){
            
                  horabrasil = 0;
                }
            
                if(horabrasil == -1){
            
                  horabrasil = 23;
                }
                if(horabrasil == -2){
            
                  horabrasil= 22;
                }
                if(horabrasil == -3){
            
                  horabrasil = 21;
                }
    
                let alarmeh = msgs[1];
                let alarmem = msgs[2];
    
    
              if(horabrasil == alarmeh && min == alarmem && sec == 00){
    
                voiceChannel.join().then(connection => {
                  
                  const dispatcher = connection.play('sirene.mp3');
        
                  message.channel.send("UOOoOoooOoOoooooooOOOooOooo");
                  message.channel.send("http://www.jornalnortesul.com.br/polopoly_fs/1.1952509.1481197663!/imagens/14811978252040.gif");
        
                  dispatcher.on('finish', () => voiceChannel.leave());


                  alarmeh = 40;
                  alarmem = 70;
        
                  
                  
                });
    
    
              }
    
            }, 500);

            }else{

              const n = await message.channel.send('Você inseriu um formato inválido para os minutos 0 a 59');

            }

          }else{

            const n = await message.channel.send('Você inseriu um formato inválido para as horas 1 a 24');

          }
          


      
        }else{
          message.channel.send('Entra em um canal de voz ai amigão');
        }

       
        
      }

      //comando entrar call tempo

      if(comando === "setarmacaco"){

        const voiceChannel = message.member.voice.channel;


        if(message.member.voice.channel){

          const n = await message.channel.send("O horário oficial do óleo de macaco foi Setado com sucesso");

          setInterval(() => {

            now = new Date
            hora = now.getHours()
            min = now.getMinutes()
            sec = now.getSeconds()
        
        
            if(hosting == true){

              var horabrasil = hora - 3;

            }else{
              
              var horabrasil = hora;

            }
        
            if(hora === 3){
        
              horabrasil = 0;
            }
        
            if(horabrasil == -1){
        
              horabrasil = 23;
            }
            if(horabrasil == -2){
        
              horabrasil= 22;
            }
            if(horabrasil == -3){
        
              horabrasil = 21;
            }


          if(horabrasil == 00 && min === 00 && sec == 00){

            voiceChannel.join().then(connection => {
              // You can play a file or a stream here:
              const dispatcher = connection.play('mamaco.mp3');
    
              message.channel.send("Agora é o horário Oficial do óleo de Macaco");
              message.channel.send("https://i.ytimg.com/vi/_jIx_tQwZLk/maxresdefault.jpg");
    
              dispatcher.on('finish', () => voiceChannel.leave());
    
              
              
            });


          }

        }, 500);
      
        }else{
          message.channel.send('Entra em um canal de voz ai amigão');
        }

       
        
      }
      //
      if(comando === "jyhvdjahd"){

        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
          // You can play a file or a stream here:

          const dispatcher = connection.play('mamaco.mp3');

          message.channel.send("Agora é o horário Oficial do óleo de Macaco");
          message.channel.send("https://i.ytimg.com/vi/_jIx_tQwZLk/maxresdefault.jpg");

          dispatcher.on('finish', () => voiceChannel.leave());

          
          
        });
      }


      //comando help
      if(comando === "help"){

        message.channel.send("Ajuda Enviada por Mensagem Privada ^-^");

        let embed = new Discord.MessageEmbed()
        .setColor('#9149ee')
        .setTitle('Lista de Comandos')
        .setImage('https://i.pinimg.com/originals/27/36/8d/27368d68c9859f66b425df9a0cc59985.gif')
        .setDescription('*ahe <frase> - Envia uma imagem de Ahegao (nada explícito) com uma frase escrita. Ex: *ahe Hm que coquinha boa \n \n *dado <numero> - rola um dado com um número de faces, com igual probabilidade e mostra o resuldado. Ex: *dado 6 \n \n *oleo - Diz quanto tempo falta para o Óleo de Macaco (meia noite) \n \n *setarmacaco - Seta um chat de voz para receber notificações de audio sempre que for meia noite \n \n *hora - Fala a hora no servidor de host (fuso horário de +3h) \n \n *livrarbarra - Envia a clássica mensagem para a polícia \n \n *moderador - Envia uma decrição do adm \n \n *cancelado - gera um cancelamento aleatório para quem usou \n \n *soco <@user> - Da um soco no usuário marcado. Ex: *soco @BoCaBot \n \n *bundada - Da uma bundada no usuário marcado. Ex: *bundada @BoCaBot \n \n *join - O bot entra na call \n \n *leave - O bot sai da call \n \n *play <link-do-youtube> - O bot toca músicas do youtube \n \n *ping - Envia o tempo de resposta do bot em ms \n \n *jacale - Lendária foto do Jaré \n \n *emoji <nome> <link> - Cria um emoji com o nome colocado e com a foto do link. Ex: *emoji teste https://teste.com \n \n *chuva - Toca 1 hora de sons de chuva relaxantes \n \n *floresta- Toca 2 hora de sons de floresta relaxantes \n \n *tristão - Spawna o meme mais triste do mundo \n \n *tens - Tens oque é necessário? \n \n *pachnotes - Notas de Atualização \n \n *video - Envia o link do último vídeo do canal \n\n *meurei - Envia uma foto (comum, rara ou ultra-rara) de algum dos macacos originais, conhecidos como reis primários. \n \n *reis - Envia o link com a pasta onde todos os reis se encontram \n \n *frase - Envia uma frase filosófica (ou não) atualizada semanalmente')  
        .setThumbnail('https://images.emojiterra.com/twitter/v13.0/512px/2699.png')
        .setFooter('Existem comandos secretos')
        .setTimestamp();

        message.author.send(embed);

      }


      //comando novos amigos

      if(comando === "novosamigos"){

        var msgsf = '';

        for(i=2; i<12; i++){
  
          if(msgs[i] === undefined){
  
            msgs[i] = "";

          }
  
            if(msgs[i] != ""){

              msgsf = msgsf + msgs[i] + " ";

            }
          
          
      
        }

        if (msgs[1] == undefined){

          message.reply("Não deletou ninguém da sua lista de amigos, para deletar voce precisa marcar alguém após o comando, se quiser diga o motivo também");

        }else{
          
          message.reply("deletou  " + msgs[1] + " da lista de amigos. Motivo: '" + msgsf + "'. \n Agora ele busca por novos amigos !");
          message.channel.send("https://i.pinimg.com/originals/9b/2f/43/9b2f4315f034deb6228450b684f020aa.jpg");

        }



      }


      //comando emoji

      if (comando === "emoji"){
  
        let info = {filename: "emoji.png"}  
        let [nome, emojilink] = args
        if(!msgs[1]) return message.reply("Você esqueceu alguma coisa\n *emoji <nome> <link>");
        if(!msgs[2]) return message.reply("Você esqueceu alguma coisa\n *emoji <nome> <link>");
          
          
        
            if(message.member.hasPermission("MANAGE_EMOJIS")){
            download(emojilink, info, function(err){
            if(!err) {

                message.guild.emojis.create('emoji.png', nome)
                message.channel.send("Caso a imagem tenha menos de 256kb de emoji será adicionado!!!")
                
              }else{

                message.channel.send("Link Inválido")

              }        


            })              
          
          }else {
              message.channel.send("Você não tem a permissão 'gerênciar emojis'")
            }         
        
        }

        //comando setar meu pau

        if(comando == 'setarmeupau'){


          message.channel.send("O arquivo é muito pequeno para ser lido")


        }

        //comando pau

        if(comando == 'pau'){


          message.channel.send("https://www.woodz.com.br/media/wysiwyg/Wood_walnut.jpg")
          

        }

        //comando chuva

        if(comando == 'chuva'){

          const voiceChannel = message.member.voice.channel;

          voiceChannel.join().then(connection => {
            // You can play a file or a stream here:
 
            const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=akHo9akPKvw', { quality: 'highestaudio' }));

            message.channel.send("Hmm, chuvinha gostosa")
            message.channel.send("https://www.youtube.com/watch?v=akHo9akPKvw")

            dispatcher.on('finish', () => voiceChannel.leave());
  
            
            
          });


        }

          //comando chuva

          if(comando == 'floresta'){

            const voiceChannel = message.member.voice.channel;
  
            voiceChannel.join().then(connection => {
              // You can play a file or a stream here:
    
              const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=osE7bpaO6R4', { quality: 'highestaudio' }));
  
              message.channel.send("Hmm, florestinha gostosa")
              message.channel.send("https://www.youtube.com/watch?v=osE7bpaO6R4")
  
              dispatcher.on('finish', () => voiceChannel.leave());
    
              
              
            });
  
  
          }


          //comando play

          if(comando == 'play'){

            const voiceChannel = message.member.voice.channel;

            if(tocando == 1){

              message.channel.send("Uma faixa ja está sendo tocada, digite *leave ou *stop para parar ou aguarde até o final")

            }else{


              if(message.member.voice.channel){  

              if(msgs[1][0] == 'h' && msgs[1][8] == 'w' && msgs[1][12] == 'y' && msgs[1][22] == 'm'){

                voiceChannel.join().then(connection => {
  
                const dispatcher = connection.play(ytdl(msgs[1], { quality: 'highestaudio' }));
  
                tocando = 1;
    
                dispatcher.on('finish', () => voiceChannel.leave());

                dispatcher.on('finish', () => tocando = 0 );
 
              });
  
              }

                if(message.member.voice.channel){  

                  if(msgs[1][0] == 'h' && msgs[1][8] == 'y' && msgs[1][12] == 'u'){
    
                    voiceChannel.join().then(connection => {
      
                    const dispatcher = connection.play(ytdl(msgs[1], { quality: 'highestaudio' }));
      
                    tocando = 1;
        
                    dispatcher.on('finish', () => voiceChannel.leave());
    
                    dispatcher.on('finish', () => tocando = 0 );
     
                  });
      
                  }
                }
              
              
              
                if(msgs[1][8] != 'y'){

                  if(msgs[1][12] != 'y'){

                     message.channel.send("Esse não é um formato de link válido, o link deve começar com :'https://www.youtube.com/' ou ' https://youtu.be'")
                  }
  
              }

              }else{
                
                message.channel.send('Entra em um canal de voz ai amigão');

              }

            }

          }

              //comandos de stop

              if(comando === "stop"){

                if(message.member.voice.channel){
                  message.member.voice.channel.leave();
                  tocando = 0;

                }else{
                  message.channel.send('Entra em um canal de voz ai amigão');
                }

              }

              //comando tens

              if(comando == "tens"){

                randomNumber = Math.floor(Math.random() * (12 -1) + 1);

                if(randomNumber == 1){

                  message.channel.send("https://pbs.twimg.com/media/CwJMGQVWAAA4ICV.jpg");
                  
                }

                if(randomNumber == 2){

                  message.channel.send("https://images3.memedroid.com/images/UPLOADED792/573510825c2ab.jpeg");
                  
                }

                if(randomNumber == 3){

                  message.channel.send("https://www.museudememes.com.br/wp-content/uploads/2017/03/sub-buzz-9789-1474574902-1.jpg");
                  
                }

                if(randomNumber == 4){

                  message.channel.send("https://www.museudememes.com.br/wp-content/uploads/2017/03/TGOo4wx.jpg");
                  
                }

                if(randomNumber == 5){

                  message.channel.send("https://i.redd.it/p185duf7ggsx.jpg");
                  
                }

                if(randomNumber == 6){

                  message.channel.send("https://images3.memedroid.com/images/UPLOADED854/58460b9fe6b3b.jpeg");
                  
                }

                if(randomNumber == 7){

                  message.channel.send("https://images7.memedroid.com/images/UPLOADED670/5820e53a69da9.jpeg");
                  
                }

                if(randomNumber == 8){

                  message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpLhWqKxBwvg-TbNZGwKRJjMw7YAlSTdtV0A&usqp=CAU");
                  
                }

                if(randomNumber == 9){

                  message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWJCVk6w6catpw26efd2shSDifsNY3rq_t4w&usqp=CAU");
                  
                }

                if(randomNumber == 10){

                  message.channel.send("https://pics.me.me/thumb_o-meudragonborn-est%C3%A1-morto-n%C3%A3o-quero-voltar-a-casar-s%C3%B3-53047904.png");
                  
                }

                if(randomNumber == 11){

                  message.channel.send("https://images7.memedroid.com/images/UPLOADED522/580aea1ee5e71.jpeg");
                  
                }


              }

              //comando autotens

              if(comando == "autotens"){

                let avatarlink = message.author.avatarURL;

                let info = {filename: "avatar.png"}  ;
                

                download(avatarlink, info, function(err){

                  if(!err) {
      
                      //message.guild.emojis.create('emoji.png', nome)
                      //message.channel.send("Caso a imagem tenha menos de 256kb de emoji será adicionado!!!")
                      
                    }else{
      
                      //message.channel.send("Link Inválido")
      
                    }        
      
      
                  }) 

                let fundo = await jimp.read('autotens.png')

                jimp.read(message.author.avatarUR).then(avatar => {
                  avatar.resize(93, 93)
                
                  fundo.composite(avatar, 3, 47).write('autotens2.png')
                  //canal.send(``, { files: ["autotens2.png"] })
                  message.channel.send('', {files :["autotens2.png"]});
                  
                  console.log('Imagem enviada para o Discord')

                  })
                  .catch(err => {
                  console.log('error avatar')
                  })

                

                

                
                
              }
              

              if (comando == "nasbdjha"){

                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                  // You can play a file or a stream here:
                  const dispatcher = connection.play('mamaco.mp3');
        
                  message.channel.send("Agora é o horário Oficial do óleo de Macaco");
                  message.channel.send("https://i.ytimg.com/vi/_jIx_tQwZLk/maxresdefault.jpg");
        
                  dispatcher.on('finish', () => voiceChannel.leave());
        
                  
                  
                });
              }

              if (comando == 'tristão'){

                message.channel.send("https://cdn.discordapp.com/attachments/651160642471985166/781319987981582336/video0-16_1.mp4");
                
              }

              if(comando == "pachnotes"){

                message.channel.send("Notas da Atualização Enviadas no Privado");

                let embed = new Discord.MessageEmbed()
                .setColor('#9149ee')
                .setTitle('Notas de Atualização')
                .setImage('https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif')
                .setDescription('>Pach Atual 1.0 Dia 31/05/2021 \n \n Adicionados Status Novos no Bot \n \n Comandos novos: meurei, reis, frase; \n \n >Pach Futuro 1.2 *sem data* \n \n *Serão Adicionados comandos de automeme; polimento do comando ahe e novos comandos de utilidade (ban, kik, mute, etc)* ')  
                .setThumbnail('https://images.emojiterra.com/twitter/v13.0/512px/2699.png')
                .setFooter('Segue no Insta @calcio.filho')
                .setTimestamp();
        
                message.author.send(embed);



              }

              if(comando == "video"){

                message.channel.send("O último vídeo \n https://www.youtube.com/watch?v=ucdLw6fkh_Q");


              }

              if(comando == "ban"){ 


              }

              if(comando === "anonovo"){

                const voiceChannel = message.member.voice.channel;
        
        
                if(message.member.voice.channel){
        
                  const n = await message.channel.send("O ano novo foi Setado com sucesso");
        
                  setInterval(() => {
        
                    now = new Date
                    hora = now.getHours()
                    min = now.getMinutes()
                    sec = now.getSeconds()
                
                
                    var horabrasil = hora - 3;
                
                    if(hora === 3){
                
                      horabrasil = 0;
                    }
                
                    if(horabrasil == -1){
                
                      horabrasil = 23;
                    }
                    if(horabrasil == -2){
                
                      horabrasil= 22;
                    }
                    if(horabrasil == -3){
                
                      horabrasil = 21;
                    }
        
        
                  if(horabrasil == 00 && min === 00 && sec == 00){
        
                    voiceChannel.join().then(connection => {
                      // You can play a file or a stream here:
                      const dispatcher = connection.play('anonovo.mp3');
            
                      message.channel.send("Fiaaaaaaaaaaaum");
                      message.channel.send("https://s2.glbimg.com/BLb-7WoKmsg8SCw4jDgQN0NHMAU=/780x440/e.glbimg.com/og/ed/f/original/2017/06/22/fogos.jpg");
            
                      dispatcher.on('finish', () => voiceChannel.leave());
            
                      
                      
                    });
        
        
                  }
        
                }, 500);
              
                }else{
                  message.channel.send('Entra em um canal de voz ai amigão');
                }
        
               
                
              }

              if (comando == "sadhna"){

                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                  // You can play a file or a stream here:
                  const dispatcher = connection.play('anonovo.mp3');
        
                  message.channel.send("Fiaaaaaaaaaaaum");
                  message.channel.send("https://s2.glbimg.com/BLb-7WoKmsg8SCw4jDgQN0NHMAU=/780x440/e.glbimg.com/og/ed/f/original/2017/06/22/fogos.jpg");
        
                  dispatcher.on('finish', () => voiceChannel.leave());
                });
              }

              if(comando == "vento"){

                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                  // You can play a file or a stream here:
                  const dispatcher = connection.play('vento.mp3');
        
                  message.channel.send("Fuuuuuuuuuuuuuuuuuuuuu");
                  message.channel.send("https://media3.giphy.com/media/rozlnqOWqxqA8/giphy.gif");
        
                  dispatcher.on('finish', () => voiceChannel.leave());
                });


              }

              if(comando == "meurei"){

                var ranimage

                randomNumber = Math.floor(Math.random() * (1301 -1) + 1);

                //comum -----------------------------------------------------

                if(randomNumber >= 1 && randomNumber <= 800){

                  ranNasaki = Math.floor(Math.random() * (29 -1) + 1);

                  message.channel.send('Esse Meu Rei é comum *meia bomba*');

                  rannasaki = 'comum/nas' + ranNasaki + ".png";
          

                  message.channel.send('', {files :[rannasaki]});

                }
                
                //raro -------------------------------------------------------

                if(randomNumber >= 801 && randomNumber <= 1200){

                  ranNasaki = Math.floor(Math.random() * (15 -1) + 1);

                  message.channel.send('Esse Meu Rei é  raro *potente*');

                  rannasaki = 'raro/nas' + ranNasaki + ".png";
          

                  message.channel.send('', {files :[rannasaki]});

                }

                //ultra -------------------------------------------------------
                
                if(randomNumber >= 1201 && randomNumber <= 1299){

                  ranNasaki = Math.floor(Math.random() * (6 -1) + 1);

                  message.channel.send('Caralho, um Meu Rei Ultra Raro, FODA DEMAIS *Whatsapp*');

                  rannasaki = 'ultra/nas' + ranNasaki + ".png";
          

                  message.channel.send('', {files :[rannasaki]});

                }

                if(randomNumber == 1300){

                  message.reply("ACHOU O LENDÁRIO PRIMEIRO E GANHOU O ALMOÇO");
                  message.channel.send('@everyone PUTA QUE PARIU, O MEUREI ULTRA LENDÁRIO CHANCE DE 1 EM 1300 OU 0,077% DE SAIR');

                  rannasaki = 'ultra/LENDARIO' + ranNasaki + ".png";
          

                  message.channel.send('', {files :[rannasaki]});

                }

              }

              if(comando == 'reis'){

                message.channel.send('Você pode ver todos os Reis aqui: https://drive.google.com/drive/folders/1TzRwfWTqZ5aggLoNURy1hAATb3zu8IrC?usp=sharing');

              }

              if(comando == 'frase'){

                message.channel.send('Frase da semana: *"As coisas só tem o valor que você dá para elas" - FILHO, Calcio*');

              }
    
});

client.login(config.token);