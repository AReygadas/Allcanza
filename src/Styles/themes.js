export const SetTheme=(theme)=>{
    const themeL ={
      back:'#fff',
      color: '#000'      
    }   
    const themeD ={
      back:'#000',
      color: '#fff'      
    }    
    theme ==='Dark' ?  theme=themeL : theme= themeD
    return theme
}