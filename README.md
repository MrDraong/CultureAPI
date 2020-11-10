<h1># CultureAPI</h1>
NodeJs, Express and MongoDB API

<h2>Routes :</h2> 


GET /api/v1/question/all
La liste de toutes les questions

GET /api/v1/question/random
Renvoit une question au hasard

POST /api/v1/question/
Créer une question, le body doit contenir les informations nécessaires

GET /api/v1/question/:id
Retourne la question avec l'id spécifié

PUT /api/v1/question/:id
Modifie une question,  le body doit contenir les informations nécessaires

DELETE /api/v1/question/:id
Supprime la question avec l'id spécifié

L'objet question est de la forme (en JSON) :
{
  "topic" : "Un thème",
  "question" : "la question ?",
  "answer" : "sa réponse !",
  "information" : "des informations supplémentaire sur la réponse"
}
#et un id unique
