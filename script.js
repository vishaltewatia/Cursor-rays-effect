const cursor = document.querySelector('.cursor');
const rays = document.querySelector('.rays');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x - cursor.clientWidth / 2 + 'px';
    cursor.style.top = y - cursor.clientHeight / 2 + 'px';

    // Create and add a ray
    const ray = document.createElement('div');
    ray.classList.add('ray');
    ray.style.left = x + 'px';
    ray.style.top = '0px';

    rays.appendChild(ray);

    // Remove the ray after the animation
    ray.addEventListener('animationend', () => {
        ray.remove();
    });
});
