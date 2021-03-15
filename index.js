const Discord = require("discord.js"); //baixar a lib
const jimp = require('jimp')
const client = new Discord.Client(); 
const config = require("./config.json"); 
const search = require("yt-search");
const streamOptions = {seek: 0, volume: 1};
const ytdl = require("ytdl-core");
const toApng = require('gif-to-apng')
const download = require('download-file')
var mensagem = new Object
var count = new Number();
var num
var cara
let tocando = 0;
let prontoTocar = false;
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');

let host = true;


//inicializador

client.on("ready", () => {
  m = 0;
  h = 0;
  d = 0;
  let scount = client.guilds.size;
  var memcount = client.users.size;
  console.log(`Bot foi iniciado em ` ); 
  
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
        
            if(host === true){

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


          if(horabrasil == 15 && min === 49 && sec == 30){

            voiceChannel.join().then(connection => {
              
              const dispatcher = connection.play('mamaco.mp3');
    
              message.channel.send("Agora é o horário Oficial do óleo de Macaco");
              message.channel.send("https://i.ytimg.com/vi/_jIx_tQwZLk/maxresdefault.jpg");
    
              dispatcher.on('finish', () => voiceChannel.leave());
    
              
              
            });


          }

        }, 500);
      
        }else{
          message.channel.send('Entra em um canal de voz ai vacilão');
        }

       
        
      }

      //testar macaco

      if(comando == 'asgdhaj'){

        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
          
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
        .setDescription()  
        .setThumbnail('https://images.emojiterra.com/twitter/v13.0/512px/2699.png')
        .setFooter('Existem comandos secretos')
        .setTimestamp();

        message.author.send(embed);

      }

    
});

client.login(config.token);