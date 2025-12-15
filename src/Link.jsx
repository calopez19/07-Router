const NAVIGATION_EVENT = "pushstate";

//Esta funcion va a cambiar la url, crea el evento de navegacion y lo despacha para que otra funcion pueda escuchar el evento
export function navigate(href) {
  // El metodo de abajo permite cambiar el link de la pagina con el parametro dado sin recargar la pagina
  window.history.pushState({}, "", href);
  //ahora se va a crear un evanto personalizado para avisar que se a cambiado la url
  const navigationEvent = new Event(NAVIGATION_EVENT);
  // lo llamamos pushState porque no hay una forma para escuchar el window.history.pushState ( si lo hay cuando uno navega hacia atras)
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; // con esto se verifica si dio click izq
    const isModifiedEvent =
    event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";
    
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
      window.scrollTo(0,0)
    }
  };
  return (
    <>
      <a href={to} onClick={handleClick} target={target} {...props}></a>
    </>
  );
}
