import React, { useState } from 'react';
import { Container, LeftSection, MainSection, WelcomeScreen, SettingsScreen, DiscardButton } from './styles';

const FormBuilder = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [formSettings, setFormSettings] = useState({
    title: 'Welcome to our form',
    description: 'This is a description of the form',
    buttonText: 'Start',
  });
  const [previousSettings, setPreviousSettings] = useState(formSettings);

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setFormSettings({
      ...formSettings,
      [name]: value,
    });
  };

  const saveSettings = () => {
    setPreviousSettings(formSettings);
    setShowSettings(false);
  };

  const discardChanges = () => {
    setFormSettings(previousSettings);
    setShowSettings(false);
  };

  const renderWelcomeScreen = () => (
    <WelcomeScreen>
      <h2>{formSettings.title}</h2>
      <p>{formSettings.description}</p>
      <button>{formSettings.buttonText}</button>
    </WelcomeScreen>
  );

  const renderSettingsScreen = () => (
    <SettingsScreen style={{ position: 'relative' }}>
      
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          name="title" 
          id="title" // Add an id for accessibility
          value={formSettings.title} 
          onChange={handleSettingsChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          name="description" 
          id="description" // Add an id for accessibility
          value={formSettings.description} 
          onChange={handleSettingsChange}
        />
      </div>
      <div>
        <label htmlFor="buttonText">Button Text</label>
        <input 
          type="text" 
          name="buttonText" 
          id="buttonText" // Add an id for accessibility
          value={formSettings.buttonText} 
          onChange={handleSettingsChange}
        />
      </div>
     
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '1rem' }}>
    <button onClick={saveSettings}>Save</button>
    <DiscardButton 
      onClick={discardChanges} 
      style={{ backgroundColor: 'white', color: 'red' }}
    >
      Discard
    </DiscardButton>
</div>



    </SettingsScreen>
  );
  

  return (
    <Container>
      <LeftSection>
        {showSettings ? renderSettingsScreen() : <button onClick={() => setShowSettings(true)}>welcome screen</button>}
      </LeftSection>
      <MainSection>
        {renderWelcomeScreen()}
      </MainSection>
    </Container>
  );
};

export default FormBuilder;
