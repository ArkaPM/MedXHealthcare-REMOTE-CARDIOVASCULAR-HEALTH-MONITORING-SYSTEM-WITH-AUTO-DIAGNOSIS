'use strict';
 
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

admin.initializeApp({
  credential admin.credential.applicationDefault(),
  databaseURL 'wsmedxbot.firebaseio.com'
});
 
process.env.DEBUG = 'dialogflowdebug';  enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) = {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
  
  function handleGetAuthID(agent){
    const ID = agent.parameters.AuthenticationID;
    return admin.database().ref().child('data').set({
      	Token_ID ID
    });
  } 
  
  function handleGetName(agent){
  	const name = agent.parameters.name;
	return admin.database().ref().child('data').update({
      	Name name
    });
  }
  
  function handleGetEmail(agent){
  	const email = agent.parameters.email;
	return admin.database().ref().child('data').update({
      	Email_ID email
    });
  }
  
  function handleGetAge(agent){
  	const age = agent.parameters.age;
	return admin.database().ref().child('data').update({
      	Age_in_years age
    });
  }
  
  function handleGetWeight(agent){
   const weight = agent.parameters.weight;
   return admin.database().ref().child('data').update({
      	Weight_in_kgs weight
   });
  }

  function handleGetHeight(agent){
   const height = agent.parameters.height;
   return admin.database().ref().child('data').update({
      	Height_in_cms height
   });
  }
  
  function handleGetSex(agent){
   const female = agent.parameters.female;
   const male = agent.parameters.male;
   var gender ='';
   if(female == female)
   {
     agent.add(`female value is ${female}`);
     gender = 'female';
   }
   if(male == male)
   {
     agent.add(`male value is ${male}`);
     gender = 'male';
   }
   else
   {
     agent.add(`Not to specify`);
     gender = 'Not to specify';
   }
   return admin.database().ref().child('data').update({
      	Gender gender
   });
  }
  
  function handleGetdateLastCycle(agent){
   const doc = agent.parameters.dateOfCycle;
   return admin.database().ref().child('data').update({
      	Female_Last_period_date doc
   });
  }
  
  function handleGetRegularityCycle(agent){
   const yes = agent.parameters.yes;
   const no = agent.parameters.no;
   var reg = '';
   if(yes == yes)
   {
     reg = yes;
   }
   if(no == no)
   {
     reg = no;
   }
   return admin.database().ref().child('data').update({
      	Female_Regularity_of_cycle reg
   });
  }
  
  function handleGetNotRegular(agent){
   const op1 = agent.parameters.option1;
   const op2 = agent.parameters.option2;
   var nreg = '';
   if(op1 == 1)
   {
     nreg = Long gaps in consecutive periods;
   }
   if(op2 == 2)
   {
     nreg = Short gaps in consecutive periods;
   }
   return admin.database().ref().child('data').update({
      	Female_Regularity_type nreg
   });
  }
  
  function handleGetPharmBirthControl(agent){
   const yes = agent.parameters.yes;
   const no = agent.parameters.no;
   var pharmBC = '';
   if(yes == yes)
   {
     pharmBC = yes;
   }
   if(no == no)
   {
     pharmBC = no;
   }
   return admin.database().ref().child('data').update({
      	Female_Pharmaceutical_Birth_Control pharmBC
   });
  }
  
  function handleGetLifestyleHabit(agent){
   const lifestyle = agent.parameters.lifestyle;
   return admin.database().ref().child('data').update({
      	Lifestyle_habits lifestyle
   });
  }
  
  function handleGetDietaryHabit(agent){
   const diet = agent.parameters.diet;
   return admin.database().ref().child('data').update({
      	Dietary_habits diet
   });
  }
  
  function handleGetExerciseHabits(agent){
   const yes = agent.parameters.yes;
   const no = agent.parameters.no;
   var exercise = '';
   if(yes == yes)
   {
     exercise = yes;
   }
   if(no == no)
   {
     exercise = no;
   }
   return admin.database().ref().child('data').update({
      	Exercise_doer_or_not exercise
   });
  }
  
  function handleGetRegularityExercise(agent){
   const dow = agent.parameters.dow;
   return admin.database().ref().child('data').update({
      	Exercise_regularity_in_days_of_week dow
   });
  }
  
  function handleGetTypeExercise(agent){
   const type_exercise = agent.parameters.type_exercise;
   return admin.database().ref().child('data').update({
      	Type_of_Exercise type_exercise
   });
  }
  
  function handleGetTimeExercise(agent){
   const time_exercise = agent.parameters.time_exercise;
   return admin.database().ref().child('data').update({
      	Avg_Time_for_each_Exercise time_exercise
   });
  }
  
  function handleGetOccupation(agent){
   const occupation = agent.parameters.occupation;
   return admin.database().ref().child('data').update({
      	Occupation occupation
   });
  }
  
  function handleGetAmountStress(agent){
   const amount_stress = agent.parameters.amount_stress;
   return admin.database().ref().child('data').update({
      	Amount_of_stress_at_job_1_to_7 amount_stress
   });
  }
  
  function handleGetFreqUrination(agent){
   const freq_urine = agent.parameters.freq_urine;
   return admin.database().ref().child('data').update({
      	Frequency_of_Urination freq_urine
   });
  }
  
  function handleGetConsistencyFeces(agent){
   const consistency_feces = agent.parameters.consistency_feces;
   return admin.database().ref().child('data').update({
      	Consistency_of_feces consistency_feces
   });
  }
  
  function handleGetFamilyHistoryOf(agent){
   const family_history = agent.parameters.family_history;
   return admin.database().ref().child('data').update({
      	Family_History_of_diseases family_history
   });
  }
  
  function handleGetPersonalHistoryOf(agent){
   const personal_history = agent.parameters.personal_history;
   return admin.database().ref().child('data').update({
      	Personal_History_of_diseases personal_history
   });
  }
  
  function handleGetHistoryOfPrescribedMedication(agent){
   const prescribed_history = agent.parameters.prescribed_history;
   return admin.database().ref().child('data').update({
      	History_of_Prescribed_Mediction prescribed_history
   });
  }
  
  function handleGetCurrentSymptoms(agent){
   const current_symptoms = agent.parameters.current_symptoms;
   return admin.database().ref().child('data').update({
      	Current_Symptoms current_symptoms
   });
  }
  
  function handleGetTimePeriodOfCurrentSymptoms(agent){
   const time_symptoms = agent.parameters.time_symptoms;
   return admin.database().ref().child('data').update({
      	Time_Period_Of_Current_Symptoms time_symptoms
   });
  }
  
  function handleGetAnyMoreDiscomfort(agent){
   const discomfort = agent.parameters.discomfort;
   return admin.database().ref().child('data').update({
      	Any_Discomfort_if_done_some_work discomfort
   });
  }

  let intentMap = new Map();
  intentMap.set('0.0 Welcome', welcome);
  intentMap.set('1.0 get authentication id', handleGetAuthID);
  intentMap.set('2.0 getName', handleGetName);
  intentMap.set('3.0 get E-mail ID', handleGetEmail);
  intentMap.set('4.0 get Age', handleGetAge);
  intentMap.set('5.0 get weight', handleGetWeight);
  intentMap.set('6.0 get height', handleGetHeight);
  intentMap.set('7.0 get sex', handleGetSex);
  intentMap.set('7.1 get female date of last cycle', handleGetdateLastCycle);
  intentMap.set('7.2 get Regularity of cycle', handleGetRegularityCycle);
  intentMap.set('7.2.1 get not regular then', handleGetNotRegular);
  intentMap.set('7.3 get pharmaceutical birth control', handleGetPharmBirthControl);
  intentMap.set('8.0 get lifestyle habit', handleGetLifestyleHabit);
  intentMap.set('9.0 get dietary habits', handleGetDietaryHabit);
  intentMap.set('10.0 get exercise habits', handleGetExerciseHabits);
  intentMap.set('10.1 get regularity of exercise', handleGetRegularityExercise);
  intentMap.set('10.2 get type of exercise', handleGetTypeExercise);
  intentMap.set('10.3 get time of exercise', handleGetTimeExercise);
  intentMap.set('11.0 get occupation', handleGetOccupation);
  intentMap.set('12.0 rate amount of stress', handleGetAmountStress);
  intentMap.set('13.0 get frequency of urination', handleGetFreqUrination);
  intentMap.set('14.0 get consistency of feces', handleGetConsistencyFeces);
  intentMap.set('15.0 get family history of', handleGetFamilyHistoryOf);
  intentMap.set('16.0 get personal history of', handleGetPersonalHistoryOf);
  intentMap.set('17.0 get history of prescribed medication', handleGetHistoryOfPrescribedMedication);
  intentMap.set('18.0 get currentongoing symptoms', handleGetCurrentSymptoms);
  intentMap.set('19.0 get time period of above symptoms', handleGetTimePeriodOfCurrentSymptoms);
  intentMap.set('20.0 get any discomfort if you do anything', handleGetAnyMoreDiscomfort);
  agent.handleRequest(intentMap);
});
