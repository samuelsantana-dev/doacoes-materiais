import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t('welcome')}
        </Typography>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
}
