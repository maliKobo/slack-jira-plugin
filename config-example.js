var slackbot = require('./lib/bot');

var config = {

  showIssueDetails: true,
  issueDetailsToShow: {'fields.summary':1 , 'fields.assignee' : 1, 'fields.description': 0},
  showDetailsByDefault: true,//if true, you don't need the '+' to get details
  bot_name: "JIRA",//Provide the name to post under
  token: '', // https://api.slack.com/web
  jira_urls: {
    // DEFAULT NODE IS REQUIRED.
    "DEFAULT": {url: "https://feedback.kobobooks.com/browse/"}
  },
  search_cmd: "search",
  //Since search results can be verbose, you may not want to muddy the channel
  search_output_chan: "this",//if the value is "this", then the current channel will be used, else the name of a channel
  projects: ["REPLACE", "ME", "WITH", "YOUR", "PROJECT", "NAMES", "ADRD"],
  post: false,
  verbose: true,
  emoji: ":koby:", // be sure to upload your custom emoji in slack
  link_separator: ", ",// use \n if you want new lines
  error_channel: '', //the id of the channel to send low level log errors.  If not defined, will use the current channel
  
  baseurl: "https://feedback.kobobooks.com/",
  username: '',
  password: ''
};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
