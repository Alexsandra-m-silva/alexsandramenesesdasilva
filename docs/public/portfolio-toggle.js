document.querySelectorAll('.toggle-details').forEach((button) => {
  const details = button.nextElementSibling;

  const syncDetailsState = () => {
    const isVisible = details.classList.contains('is-visible');
    details.style.maxHeight = isVisible ? `${details.scrollHeight}px` : '0px';
    details.style.opacity = isVisible ? '1' : '0';
    details.style.marginTop = isVisible ? '0.8rem' : '0';
  };

  button.addEventListener('click', () => {
    const isVisible = details.classList.toggle('is-visible');

    button.setAttribute('aria-expanded', String(isVisible));
    button.textContent = isVisible ? 'Hide details' : 'Expand details';
    syncDetailsState();
  });

  syncDetailsState();
});
