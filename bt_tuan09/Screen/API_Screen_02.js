//API

// import React, { useState } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import axios from 'axios';
// import useFetch from '../hooks/useFetch';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const API_Screen_02 = ({ navigation, route }) => {
//   const { name } = route.params;
//   const [searchQuery, setSearchQuery] = useState('');

//   const { data: jobs, loading, error, refetch } = useFetch('https://67219f5898bbb4d93ca901a3.mockapi.io/task');

//   useFocusEffect(
//     React.useCallback(() => {
//       refetch();
//     }, [refetch])
//   );

//   const handleAddJob = () => {
//     navigation.navigate('API_Screen_03', { job: null, name });
//   };

//   const handleEditJob = (job) => {
//     navigation.navigate('API_Screen_03', { job, name });
//   };

//   const renderJobItem = ({ item }) => (
//     <View style={styles.jobItem}>
//       <View style={styles.jobTextContainer}>
//         <Icon name="check-box" size={24} color="green" />
//         <Text style={styles.jobTitle}>{item.title}</Text>
//       </View>
//       <View style={styles.jobActions}>
//         <TouchableOpacity onPress={() => handleEditJob(item)}>
//           <Icon name="edit" size={24} color="#FF6347" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
  
//   return (
//     <View style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.profileImage} />
//         <Text style={styles.headerText}>Hi {name}, Have a great day ahead!</Text>
//       </View>

//       {/* Search Input */}
//       <View style={styles.searchContainer}>
//         <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View> 

//       {/* Job List */}
//       <View style={{ width: '100%', height: 350 }}>
//         <FlatList
//           contentContainerStyle={{ flexGrow: 1 }}
//           data={jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()))}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderJobItem}
//         />
//       </View>

//       {/* Add Job Button */}
//       <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingHorizontal: 20, backgroundColor: '#F6F8FA' },
//   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   backButton: { marginRight: 10 }, // Styling for the back button
//   profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
//   headerText: { fontSize: 18, fontWeight: 'bold', color: '#333', flex: 1 },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#EAEAEA',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginBottom: 20,
//   },
//   searchIcon: { marginRight: 10 },
//   searchInput: { flex: 1, fontSize: 16 },
//   jobItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 20,
//     marginVertical: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   jobTextContainer: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   jobTitle: { marginLeft: 10, fontSize: 16, color: '#333' },
//   jobActions: { flexDirection: 'row' },
//   addButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: '#0A84FF',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   addButtonText: { fontSize: 32, color: '#FFFFFF' },
// });

// export default API_Screen_02;

//Redux_Toolkit
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchJobs } from './jobSlice';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const API_Screen_02 = ({ navigation, route }) => {
//   const { name } = route.params;
//   const [searchQuery, setSearchQuery] = useState('');
//   const dispatch = useDispatch();
//   const jobs = useSelector((state) => state.jobs.list);

//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);

//   const handleAddJob = () => {
//     navigation.navigate('API_Screen_03', { job: null, name });
//   };

//   const handleEditJob = (job) => {
//     navigation.navigate('API_Screen_03', { job, name });
//   };

//   const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.profileImage} />
//         <Text style={styles.headerText}>Hi {name}, Have a great day ahead!</Text>
//       </View>
      
//       <View style={styles.searchContainer}>
//         <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View> 
//       <View style= {{width:'100%', height:350}}> 
//           <FlatList
//           data={filteredJobs}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.jobItem}>
//               <Text style={styles.jobTitle}>{item.title}</Text>
//               <TouchableOpacity onPress={() => handleEditJob(item)}>
//                 <Icon name="edit" size={24} color="#FF6347" />
//               </TouchableOpacity>
//             </View>
//           )}
//           />
//       </View>
     

//       <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     paddingHorizontal: 20, 
//     backgroundColor: '#F6F8FA' 
//   },
//   header: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     marginBottom: 20 
//   },
//   backButton: { 
//     marginRight: 10 
//   }, 
//   profileImage: { 
//     width: 50, 
//     height: 50, 
//     borderRadius: 25, 
//     marginRight: 10 
//   },
//   headerText: { 
//     fontSize: 18, 
//     fontWeight: 'bold', 
//     color: '#333', 
//     flex: 1 
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#EAEAEA',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 3 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   searchIcon: { 
//     marginRight: 8 
//   },
//   searchInput: { 
//     flex: 1, 
//     fontSize: 16 
//   },
//   jobItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 12,
//     marginVertical: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//     borderColor: '#DDD',
//     borderWidth: 1,
//   },
//   jobTitle: { 
//     marginLeft: 10, 
//     fontSize: 16, 
//     color: '#333', 
//     flex: 1 
//   },
//   jobActions: { 
//     flexDirection: 'row' 
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: '#0A84FF',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   addButtonText: { 
//     fontSize: 32, 
//     color: '#FFFFFF' 
//   },
// });

// export default API_Screen_02;

//Recoil
// import React, { useEffect } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useRecoilState, useRecoilValueLoadable } from 'recoil';
// import { jobsState, fetchJobsSelector, jobFetchStatusState } from './state';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const API_Screen_02 = ({ navigation, route }) => {
//   const { name } = route.params;
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const [jobs, setJobs] = useRecoilState(jobsState);
//   const jobsLoadable = useRecoilValueLoadable(fetchJobsSelector);

//   useEffect(() => {
//     if (jobsLoadable.state === 'hasValue') {
//       setJobs(jobsLoadable.contents);
//     }
//   }, [jobsLoadable.state]);

//   const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));

//   const handleAddJob = () => {
//     navigation.navigate('API_Screen_03', { job: null, name });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header and search bar UI code */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.profileImage} />
//         <Text style={styles.headerText}>Hi {name}, Have a great day ahead!</Text>
//       </View>
      
//       <View style={styles.searchContainer}>
//         <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>
//       <View style={{width:'100%',height:350}}> 
//           <FlatList
//           data={filteredJobs}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.jobItem}>
//               <Text style={styles.jobTitle}>{item.title}</Text>
//               <TouchableOpacity onPress={() => navigation.navigate('API_Screen_03', { job: item, name })}>
//                 <Icon name="edit" size={24} color="#FF6347" />
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       </View>
      

//       <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     paddingHorizontal: 20, 
//     backgroundColor: '#F6F8FA' 
//   },
//   header: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     marginBottom: 20 
//   },
//   backButton: { 
//     marginRight: 10 
//   }, 
//   profileImage: { 
//     width: 50, 
//     height: 50, 
//     borderRadius: 25, 
//     marginRight: 10 
//   },
//   headerText: { 
//     fontSize: 18, 
//     fontWeight: 'bold', 
//     color: '#333', 
//     flex: 1 
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#EAEAEA',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 3 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   searchIcon: { 
//     marginRight: 8 
//   },
//   searchInput: { 
//     flex: 1, 
//     fontSize: 16 
//   },
//   jobItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 12,
//     marginVertical: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//     borderColor: '#DDD',
//     borderWidth: 1,
//   },
//   jobTitle: { 
//     marginLeft: 10, 
//     fontSize: 16, 
//     color: '#333', 
//     flex: 1 
//   },
//   jobActions: { 
//     flexDirection: 'row' 
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: '#0A84FF',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   addButtonText: { 
//     fontSize: 32, 
//     color: '#FFFFFF' 
//   },
// });

// export default API_Screen_02;

//Redux_Saga
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsRequest } from './jobSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

const API_Screen_02 = ({ navigation, route }) => {
  const { name } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.list);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  const handleAddJob = () => {
    navigation.navigate('API_Screen_03', { job: null, name });
  };

  const handleEditJob = (job) => {
    navigation.navigate('API_Screen_03', { job, name });
  };

  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.profileImage} />
        <Text style={styles.headerText}>Hi {name}, Have a great day ahead!</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={{}}>
          <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.jobItem}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => handleEditJob(item)}>
                <Icon name="edit" size={24} color="#FF6347" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      

      <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 20, 
    backgroundColor: '#F6F8FA' 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  backButton: { 
    marginRight: 10 
  }, 
  profileImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10 
  },
  headerText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    flex: 1 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: { 
    marginRight: 8 
  },
  searchInput: { 
    flex: 1, 
    fontSize: 16 
  },
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  jobTitle: { 
    marginLeft: 10, 
    fontSize: 16, 
    color: '#333', 
    flex: 1 
  },
  jobActions: { 
    flexDirection: 'row' 
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#0A84FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  addButtonText: { 
    fontSize: 32, 
    color: '#FFFFFF' 
  },
});

export default API_Screen_02;



