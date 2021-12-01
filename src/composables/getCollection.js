import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
	const documents = ref(null);
	const error = ref(null);

    // get the collection from Firestore
	let collectionRef = projectFirestore
		.collection(collection)
		.orderBy("createdAt");

	// setup up a realtime listener to the Firestore DB
	collectionRef.onSnapshot(
		(snap) => {
			let results = [];
			snap.docs.forEach((doc) => {
				doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
			});

			documents.value = results;
			error.value = null;
		},
		(err) => {
			console.error(err.message);
			documents.value = null;
			error.value = "Could not fetch data.";
		}
	);

	return { documents, error };
};

export default getCollection;
