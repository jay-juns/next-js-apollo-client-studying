import { Icon } from '@iconify/react';

const ToggleThemeBtn= ({ theme, toggleTheme }: {theme:any, toggleTheme:any}) => {
    const isLight = theme === 'light';
    console.log(theme, 'theme')
  
  return (
    <button className="toggle-btn" onClick={toggleTheme}>
       <Icon className={isLight === true ? '' : 'sun'} icon="ri:moon-line" />
       <Icon className={isLight === true ? 'moon' : ''} icon="ri:sun-line" />
    </button>
  )
};

export default ToggleThemeBtn;