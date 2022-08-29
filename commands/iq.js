module.exports = ({
name: "iq",
aliases: "intelligence", 
description: "Show your iq level",
category: "Fun",
perm: "None",
usage: "iq (username|id)",
  code: `**Starting the iq level test of $username[$findMember[$message;yes]]**
 $editIn[2s;**Calculating iq level of user ᚛** $username[$findMember[$message;yes]];**Is $username[$findMember[$message;yes]] a hacker ᚛** $randomText[yes;no;no;yes;no;yes];**Is $username[$findMember[$message;yes]] a coder ᚛** $randomText[yes;no;yes;no];**Is $username[$findMember[$message;yes]] a gamer ᚛** $randomText[yes;no;yes;yes;no;no];**Recent competetion $username[$findMember[$message;yes]] won ᚛** $randomText[Epic knowledge;High iq;Knowledge king;Human Calculator];**Most recent reward $username[$findMember[$message;yes]] got ᚛ ** $randomText[$random[1;100000] Inr;$random[1;99999] Usd;Knowledge trophy;$randomText[Gold coin;Epic medal;Trophy]];**By my calculation $username[$findMember[$message;yes]] iq is ᚛** :small_blue_diamond: ;**By my calculation $username[$findMember[$message;yes]] iq is** ᚛ $random[1;199]]
 $suppressErrors[**Sorry!
But there a problem with \`$commandName\` command if you are getting this error from a long time you could join our support server**]`
})