function alphabetPosition(text) {
  
    return text.toUpperCase().split('').map(el=>el.charCodeAt(0)-64).filter(el=>el>0&&el<27).join(' ')
    }