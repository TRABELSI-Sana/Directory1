const readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contacts = [];
    
    rl.question('Bonjour! , Entrez help pour voir les diffetentes commandes : ',(answer) =>{
        if (answer.match('help')) 
        help()
        else console.log('Il y une erreur, regardez le menu svp'), help()
       
    })
    

function help() {
    rl.question("help this command will show all the commands that is possible to do and explain how they work. \n stop : This command will close the directory. \n add : This command will allow you to add a new contact inside of your directory. \n list : This command will list all the contact present in your directory . \n delete:  This command will let you erase one contact in your directory ", answer=>{
        if(answer.match("help")) help()
        else if(answer.match("stop")) stop()
        else if(answer.match("add")) add()
        else if(answer.match("list")) list()
        else if(answer.match("delete")) deleted()
        else console.log('On comprend pas voila le menu'), help()
    } )
}


function add() {
    var phone = /^[0][6][0-9]{8}$/;
    rl.question('FirstName?', function( FirstName ) {
        rl.question('LastName?' , function(LastName){
            rl.question('Number ?' , function(Number){
                
                    if (FirstName[0].toUpperCase() === FirstName[0]   && Number.match(phone) &&  LastName[0].toUpperCase() === LastName[0] ) {
                        // Nouvelle ligne
                        const contact = { FirstName: FirstName, LastName: LastName, Number:Number };
        
                        // Ajout de la nouvelle ligne
                        contacts.push(contact);
        
                        // Affichage du nouveau tableau
                        console.log("Contact bien ajouté")
                        console.log(contacts);
        
                        help()
                    }
                    else{
                        console.log('Désolé, votre numéro de telephone doit commencer par 06! merci de mettre ton nom et prénom en lettre majusculevotre')
                        add()
                    }
                
                
            })
        })
    })
}

function stop(){
    console.log('Au revoir')
    rl.close();
}

function deleted(){

    contacts.forEach(function(item, index, array) {
        console.log(item, 'ID :', index);
    })
    rl.question('cest quoi l id du contact index ?', function( index ) {
        if (contacts[index]  == undefined) {
            console.log("erreur cet id n'existe pas !!!")
            console.log('Voila les identifiants qui existent')
            deleted()
            
            
        }
        else{
            contacts.splice(index, 1)
            console.log('Votre contact a été bien supprimé')
            console.log("voila la nouvelle liste")
            console.log(contacts)
        }
        

    })

}

function list(){
    console.log('voila la liste de vos contacts')
    contacts.forEach(function(item, index, array) {
        console.log('ID :  ==> ' ,index ,item.FirstName, item.LastName, '\n','Phone : ', item.Number )
    })
    help()
}



 
