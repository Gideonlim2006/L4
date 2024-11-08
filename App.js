import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

// ===============Exercise 1================
// const Exercise1 = () => {
//     return (
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text style={{color: "green"}}>Excellence</Text>
//         <Text style={{backgroundColor: "yellow"}}>Customer-Centric</Text>
//         <Text style={{fontStyle: "italic"}}>Integrity</Text>
//         <Text style={{textAlign: "center"}}>Teamwork</Text>
//         <Text style={{backgroundColor: "black", color: "white"}}>Enterprising</Text>
//       </View>
//     );
// };

// ===============Exercise 2================
// const styles = StyleSheet.create({
//     greenBox: {
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: "green",
//         borderColor: "black",
//         borderWidth: 1,
//     },
//     boxText: {
//         textAlign: "center",
//         color: "white",
//     },
//     title: {
//         fontWeight: "bold",
//     },
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//         // justifyContent: 'flex-start',
//         // justifyContent: 'flex-end',
//         justifyContent: 'space-around',
//         // justifyContent: 'space-between',
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         // flex: 1
//     },
// });
//
// const Exercise2 = () => {
//     return (
//         <View style={{marginTop: 50}}>
//             <View style={styles.greenBox}>
//                 <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//             </View>
//
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our People</Text>
//             </View>
//
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our Campus</Text>
//             </View>
//         </View>
//     );
// }

// ===============Exercise 3A================
//     parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });
//
// const Exercise3A = () => {
//     return (
//         <View style={[styles.parent, {marginTop: 50}]}>
//             <Text style={[styles.child, {backgroundColor: "powderblue"}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor: "steelblue"}]}>Child Three</Text>
//         </View>
//     );
// }

// ===============Exercise 3B================
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         flex: 1
//     },
// });
//
// const Exercise3B = () => {
//     return (
//         <View style={[styles.parent, {marginTop: 50}]}>
//             <Text style={[styles.child, {backgroundColor: "powderblue"}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor: "steelblue"}]}>Child Three</Text>
//         </View>
//     );
// }

// ===============Exercise 3C================
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         flex: 1
//     },
// });
//
// const Exercise3C = () => {
//     return (
//         <View style={[styles.parent, {marginTop: 50}]}>
//             <Text style={[styles.child, {backgroundColor: "powderblue", maxWidth: 90}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor: "steelblue", maxHeight: 120}]}>Child Three</Text>
//         </View>
//     );
// }

// ===============Exercise 3D================
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//
//
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         // flex: 1
//     },
// });
//
// const Exercise3D = () => {
//     return (
//         <View style={[styles.parent, {marginTop: 50}]}>
//             <Text style={[styles.child, {backgroundColor: "powderblue", flex: 1}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor: "skyblue", flex: 2}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor: "steelblue", flex: 3}]}>Child Three</Text>
//         </View>
//     );
// }

// ===============Exercise 3E================
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//         // justifyContent: 'flex-start',
//         // justifyContent: 'flex-end',
//         justifyContent: 'space-around',
//         // justifyContent: 'space-between',
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         // flex: 1
//     },
// });
//
// const Exercise3E = () => {
//     return (
//         <View style={[styles.parent, {marginTop: 50}]}>
//             <Text style={[styles.child, {backgroundColor: "powderblue"}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor: "steelblue"}]}>Child Three</Text>
//         </View>
//     );
// }

// ===============Exercise 4================
const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    child: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",

    }
});

const Exercise4 = () => {
    return (
        <View style={[styles.parent, {marginTop: 50}]}>
            <View style={[styles.child, {backgroundColor: "#98c4e8"}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, {backgroundColor: "#81bfad"}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, {backgroundColor: "#ce3f43"}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}


export default Exercise4;
