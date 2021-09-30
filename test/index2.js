const Launch = async () => {
	console.log('Launched ...');

	const config = {
		apiKey: 'AIzaSyCcgkYt_NHQVEZ6-C_j_MuRctejPyPQUYE',
		authDomain: 'first-cloud-messaging-59ad8.firebaseapp.com',
		//databaseURL:"https://rfms-dham-default-rtdb.firebaseio.com",
		projectId: 'first-cloud-messaging-59ad8',
		storageBucket: 'first-cloud-messaging-59ad8.appspot.com',
		messagingSenderId: '1053311552765',
		appId: '1:1053311552765:web:25d05e88d4c9decc540294',
		measurementId: 'G-K47CSBQQCL'
	};
	const firebaseApp = await firebase.initializeApp(config);

	const messaging = await firebase.messaging();
	await messaging
		.requestPermission()
		.then(() => messaging.getToken())
		.then((token) => console.log('Token: ', token))
		.catch((err) => console.log('Error: ', err));

	// const recieving = await firebase.messaging.getMessaging(firebaseApp);
	firebase.onMessage(firebaseApp, (payload) => {
		console.log('Message: ', payload);
    });
    
    firebase.onTokenRefresh(firebaseApp, (payload) => {
		console.log('Message: ', payload);
	});

	console.log('Script Ended ...');
};

window.onload = Launch;
