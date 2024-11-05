function slideProducts(index) {
    const slider = document.querySelector('.product-slider');
    const cards = document.querySelectorAll('.product-card');
    const cardWidth = cards[0].offsetWidth + 20; // Width of card + margin-right
    const scrollAmount = cardWidth * index;
    slider.scroll({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
