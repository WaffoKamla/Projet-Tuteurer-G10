import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EstimatePage = () => {
  const [service, setService] = useState('');
  const [currentLocal, setCurrentLocal] = useState('');
  const [newLocal, setNewLocal] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [dateArrivee, setDateArrivee] = useState('');
  const [superficieActuelle, setSuperficieActuelle] = useState('');
  const [superficieNouvelle, setSuperficieNouvelle] = useState('');
  const [nombrePieces, setNombrePieces] = useState('');
  const [nombreMeubles, setNombreMeuble] =useState('');
  const [nombrePersonnes, setNombrePersonnes] = useState('');
  const [commentaires, setCommentaires] = useState('');

  const handleSubmitDevis = () => {
    // Logique pour soumettre le devis
    // (par exemple, envoyer les données au serveur, afficher le devis, etc.)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vous voulez déménager ou acheter du matériel de déménagement ?</Text>
        <Text style={[styles.headerText, styles.boldText, styles.largeText]}>Obtenez un devis</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <View style={styles.formStep}>
          <Image source={require('../../../assets/b4.jpg')} style={styles.formStepImage} />
          <Text style={styles.formStepLabel}>En quoi pouvons-nous vous aider ?</Text>
          <Picker
            selectedValue={service}
            onValueChange={(itemValue) => setService(itemValue)}
            style={styles.formInput}
          >
            <Picker.Item label="Choisissez un service" value="" />
            <Picker.Item label="Déménagement" value="demenagement" />
            <Picker.Item label="Achat de matériel" value="materiel" />
          </Picker>
        </View>

        <View style={styles.formStep}>
          
          <Text style={styles.formStepLabel}>Quel est votre local actuel ?</Text>
          <Picker 
            selectedValue={currentLocal}
            onValueChange={(itemValue) => setCurrentLocal(itemValue)}
            style={styles.formInput}
          >
            <Picker.Item  style={styles.picker} label="Choisissez votre local" value="" />
            <Picker.Item label="Appartement" value="appartement" />
            <Picker.Item label="Maison" value="maison" />
            <Picker.Item label="Bureau" value="bureau" />
          </Picker>
        </View>

        <View style={styles.formStep}>
          
          <Text style={styles.formStepLabel}>Quel sera votre nouveau local ?</Text>
          <Picker
            selectedValue={newLocal}
            onValueChange={(itemValue) => setNewLocal(itemValue)}
            style={styles.formInput}
          >
            <Picker.Item label="Choisissez votre nouveau local" value="" />
            <Picker.Item label="Appartement" value="appartement" />
            <Picker.Item label="Maison" value="maison" />
            <Picker.Item label="Bureau" value="bureau" />
          </Picker>
        </View>

        <View style={styles.formStep}>
          
          <Text style={styles.formStepLabel}>Date de départ</Text>
          <TextInput
            style={styles.formInput}
            placeholder="JJ/MM/AAAA"
            value={dateDepart}
            onChangeText={setDateDepart}
          />
        </View>

        <View style={styles.formStep}>
         
          <Text style={styles.formStepLabel}>Date d'arrivée</Text>
          <TextInput
            style={styles.formInput}
            placeholder="JJ/MM/AAAA"
            value={dateArrivee}
            onChangeText={setDateArrivee}
          />
        </View>

        <View style={styles.formStep}>
          
          <Text style={styles.formStepLabel}>Superficie actuelle</Text>
          <TextInput
            style={styles.formInput}
            placeholder="En m²"
            value={superficieActuelle}
            onChangeText={setSuperficieActuelle}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formStep}>
        
          <Text style={styles.formStepLabel}>Nouvelle superficie</Text>
          <TextInput
            style={styles.formInput}
            placeholder="En m²"
            value={superficieNouvelle}
            onChangeText={setSuperficieNouvelle}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formStep}>
          
          <Text style={styles.formStepLabel}>Nombre de pièces</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Nombre de pièces"
            value={nombrePieces}
            onChangeText={setNombrePieces}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formStep}>
         
          <Text style={styles.formStepLabel}>Nombre de personnes</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Nombre de personnes"
            value={nombrePersonnes}
            onChangeText={setNombrePersonnes}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formStep}>
         
          <Text style={styles.formStepLabel}>Nombre de Meubles</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Vos Meubles"
            value={nombreMeubles}
            onChangeText={setNombreMeuble}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formStep}>
          
          <Text style={styles.formStepLabel}>Commentaires</Text>
          <TextInput
            style={[styles.formInput, styles.commentInput]}
            placeholder="Entrez vos commentaires"
            value={commentaires}
            onChangeText={setCommentaires}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitDevis}>
          <Text style={styles.submitButtonText}>Obtenir un devis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submit} onPress={handleSubmitDevis}>
          <Text style={styles.submitButtonText}>Obtenir un devis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submit} onPress={handleSubmitDevis}>
          <Text style={styles.submitButtonText}>Obtenir un devis</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/b4.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.image}>
        
      </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (les styles précédents restent inchangés)
  container: {
    flex: 2,
    backgroundColor: '#f2f2f2',
    padding: 20,
    },
    
    imageContainer: {
      height: 250,
      overflow: 'hidden',
    },
    picker: {
      height: 100,
      width:100,
      
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      marginVertical: 10,
      marginHorizontal:10,
    },
    header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    },
    headerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    },
    boldText: {
    fontWeight: 'bold',
    },
    largeText: {
    fontSize: 24,
    },
    formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    },
    formLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    formInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    },
    commentInput: {
    height: 100,
    textAlignVertical: 'top',
    },
    submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    },
    submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },
    formImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    },
    formText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },

  formContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  formStep: {
    alignItems: 'center',
    marginBottom: 20,
  },
  formStepImage: {
    width: 200,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  formStepLabel: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#0077B6',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EstimatePage;