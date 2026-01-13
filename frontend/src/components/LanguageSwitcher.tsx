import { Button } from '@mui/material';
import i18n from 'i18next';

export function LanguageSwitcher() {
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button color="inherit" onClick={toggleLanguage}>
      {i18n.language.toUpperCase()}
    </Button>
  );
}
