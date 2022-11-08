const Discord = require("discord.js");

const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`with K's files`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`With K's Files`);
});                      //Serving ${client.guilds.size} servers

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

var longtail = "longtail";

var chad = "chad"
//var chad2 = "Chad"
//var chad3 = "CHAD"
//var chstring = "536738717893656587"

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(message.content.toLowerCase().includes("longtail".toLowerCase())){
    message.react(message.guild.emojis.get('549871163468152832'));//.catch(error => console.log('fuck'));
	  //message.channel.send('Dont you mean Dad');
  }


  if(message.content.toLowerCase().includes("chad".toLowerCase())){
 message.react(message.guild.emojis.get('590807662938030081'))
  }

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.

  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	  //console.log(`Pinged in this guild: ${guild.name} (id: ${guild.id}) by this person: ${message.author}`);
  }

  //lets make an array list
  var myArray = ["https://i.redd.it/yphcb8dyj3s21.png", "https://i.redd.it/ac105pnmk3s21.png", "https://i.redd.it/uu7rw19qk3s21.png", "https://i.redd.it/aunohl29n3s21.jpg", "https://i.redd.it/maaywuncn3s21.jpg", "https://i.redd.it/5n5s6d9gn3s21.jpg", "https://i.redd.it/xjz5hi2ln3s21.png", "https://i.redd.it/6iz5zci5o3s21.png", "https://i.redd.it/bzujl539o3s21.png", "https://i.redd.it/96yg74aeo3s21.png", "https://i.redd.it/75kcuwnho3s21.png", "https://i.redd.it/orcig6sno3s21.png", "https://i.redd.it/ffu5e1hqo3s21.png", "https://i.redd.it/n7hc8bnto3s21.jpg", "https://i.redd.it/w31cdaewo3s21.jpg", "https://i.redd.it/hq5hp6dzo3s21.jpg", "https://i.redd.it/o7nq7yg2p3s21.png", "https://i.redd.it/bm2tr7l5p3s21.png", "https://i.redd.it/ypl2q6kap3s21.png", "https://i.redd.it/gedvwzgep3s21.png", "https://i.redd.it/ahh1b96ip3s21.jpg", "https://i.redd.it/xrtc6fdnp3s21.png", "https://i.redd.it/59dnywrbq3s21.png", "https://i.redd.it/e13p3n5eq3s21.png", "https://i.redd.it/ovgk3vjgq3s21.png", "https://i.redd.it/ivu2kctmq3s21.gif", "https://i.redd.it/ronv4wj2r3s21.png", "https://i.redd.it/bqoqxjf5r3s21.gif", "https://i.redd.it/ovndv5far3s21.png", "https://i.redd.it/50bvvrhdr3s21.png", "https://i.redd.it/6wws5ihjr3s21.png", "https://i.redd.it/p1ip48pmr3s21.png", "https://i.redd.it/917o2uhsr3s21.png", "https://i.redd.it/pua64uavr3s21.png", "https://i.redd.it/kcsecplyr3s21.png", "https://i.redd.it/q4nhj2rks3s21.png", "https://i.redd.it/ccaj33cos3s21.png", "https://i.redd.it/4id6b35ss3s21.jpg", "https://i.redd.it/nol71w9zs3s21.png", "https://i.redd.it/7y8unde6t3s21.png", "https://i.redd.it/dy5c3jbat3s21.png", "https://i.redd.it/g6pnypuet3s21.png", "https://i.redd.it/ca9bo45it3s21.png", "https://i.redd.it/qrpd4ralt3s21.jpg", "https://i.redd.it/6hscanipt3s21.png", "https://i.redd.it/lphai6gst3s21.png", "https://i.redd.it/07mx60kvt3s21.png", "https://i.redd.it/dcuo6mayt3s21.png", "https://i.redd.it/xdfcv1z1u3s21.png", "https://i.redd.it/3b12oyz4u3s21.png", "https://i.redd.it/ofwzws0td6s21.png", "https://i.redd.it/a7mj9g6ye6s21.png", "https://i.redd.it/y8n1vdqeqpt21.png", "https://i.redd.it/2ih6xdxo7jv21.png", "https://i.redd.it/ri0i8k2t7jv21.png", "https://i.redd.it/n5ukpbjv7jv21.png", "https://i.redd.it/985cqnl48jv21.png", "https://i.redd.it/jzv1g7na8jv21.png", "https://i.redd.it/hcfuuazk8jv21.png", "https://i.redd.it/1xrglt4g9jv21.png", "https://i.redd.it/jswe8slwajv21.png", "https://i.redd.it/158qnk09mox21.png", "https://i.redd.it/tx106ngi9qx21.png", "https://i.redd.it/xrtj1lms9qx21.png", "https://i.redd.it/xhnqb2aid4y21.png"];
  var rand = myArray[Math.floor(Math.random() * myArray.length)];

  var lsimArray = ["https://i.redd.it/kxmbh01q6qv21.png", "https://i.redd.it/asw0ajbn6qv21.png", "https://i.redd.it/5pajt6xi6qv21.png", "https://i.redd.it/l3owvpx0jxv21.png", "https://i.redd.it/y6w11v79jxv21.png", "https://i.redd.it/yrymss3nja031.png"];
  var lsimRand = lsimArray[Math.floor(Math.random() * lsimArray.length)];


  if(command === "longtail") {
    const m = await message.channel.send({files:[rand]});
  }

  if(command === "lsim") {
    const m = await message.channel.send({files:[lsimRand]});
  }

  //if(command === "iq") {
  //  ;
  //}

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }

  if(command === "get") {
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage + ` was aquired!`);
  }

  if(command === "help2") {
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Help Page 2")
    .setDescription("This page is under construction");
    message.channel.send(sEmbed);
  }


  if(command === "help1") {
    let sEmbed = new Discord.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/411167663251783684/543305329262460929/emote.png')
    .setColor("#FF9900")
    .setTitle("Help Page 1")
    .addField("ch!help[int]", "use this command to get the help page, which explains current commands and usage, must have int directly after, currently only 1 help page")
    .addField("ch!ping", "Pong! retrieves latency as well as api latency")
    .addField("ch!longtail", "this brings up a picture of longtail from a list, help expand it by DMing @Katzerax#1337 on Discord with new Longtail images")
    .addField("ch!lsim", "Gives a random longtail dating sim image out of currently 3 sprites")
    .addField("ch!say", "this command makes me say whatever you want, and deletes your message (I do need admin privilages for that though). usage is ch!say [message]")
    .addField("ch!get", "this command makes me aquire whatever you want. usage? ch!get [thing]")
    .addField("ch!kick", "simple enough, kicks users but only if the user already could kick that person. Users need the role 'Administrator' or 'Moderator' to kick people")
    .addField("ch!ban", "same thing as ch!kick but instead you can ban people, users need 'Administrator' role to ban")
    .addField("ch!purge", "deletes specified number of messages, usage is ch!purge [int between 2 and 100]")
    message.channel.send(sEmbed);
  }

  if(command === "lune") {
    message.channel.send("Stop trying it'll never happen");
}

  if(command === "help") {
    let sEmbed = new Discord.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/411167663251783684/543305329262460929/emote.png')
    .setColor("#FF9900")
    .setTitle("Help Page 1")
    .addField("ch!help[int]", "use this command to get the help page, which explains current commands and usage, must have int directly after, currently only 1 help page")
    .addField("ch!ping", "Pong! retrieves latency as well as api latency")
    .addField("ch!longtail", "this brings up a picture of longtail from a list, help expand it by DMing @Katzerax#1337 on Discord with new Longtail images")
    .addField("ch!lsim", "Gives a random longtail dating sim image out of currently 3 sprites")
    .addField("ch!say", "this command makes me say whatever you want, and deletes your message (I do need admin privilages for that though). usage is ch!say [message]")
    .addField("ch!get", "this command makes me aquire whatever you want. usage? ch!get [thing]")
    .addField("ch!kick", "simple enough, kicks users but only if the user already could kick that person. Users need the role 'Administrator' or 'Moderator' to kick people")
    .addField("ch!ban", "same thing as ch!kick but instead you can ban people, users need 'Administrator' role to ban")
    .addField("ch!purge", "deletes specified number of messages, usage is ch!purge [int between 2 and 100]")
    message.channel.send(sEmbed);
  }


  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);
