// Input radius
let r = parseFloat(prompt("Enter Radius of Sphere:"));

// Calculate Volume and Area
let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
let area = 4 * Math.PI * Math.pow(r, 2);

// Output exactly like example
console.log(`Volume of Sphere: ${volume.toFixed(6)}`);
console.log(`Area of Sphere  : ${area.toFixed(6)}`);
