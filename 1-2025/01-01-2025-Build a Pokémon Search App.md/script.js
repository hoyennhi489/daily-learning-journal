// Listen to the event when the user clicks the "search-button"
document.getElementById("search-button").addEventListener("click", async (event) => {
    // Prevent the default form action when the search button is clicked
    event.preventDefault();
    
    // Get the value from the "search-input" field, trim whitespace, and convert to lowercase
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
    
    // Check if the search field is empty
    if (!searchInput) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }

    // Create an API URL based on the Pokémon name or ID entered by the user
    const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`;
    
    // Get the "types" element to display Pokémon types
    const typesElement = document.getElementById("types");

    try {
        // Send a request to the API to fetch Pokémon data
        const response = await fetch(apiUrl);

        // Check if the API does not return a valid result (e.g., Pokémon does not exist)
        if (!response.ok) {
            alert("Pokémon not found");
            return; // Stop if the Pokémon is not found
        }

        // Convert the API response data to JSON format
        const data = await response.json();

        // Update Pokémon name on the user interface
        document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
        
        // Update Pokémon ID (prepend with #)
        document.getElementById("pokemon-id").textContent = `#${data.id}`;
        
        // Update Pokémon weight and height
        document.getElementById("weight").textContent = `Weight: ${data.weight}`;
        document.getElementById("height").textContent = `Height: ${data.height}`;
        
        // Update Pokémon stats (HP, Attack, Defense, etc.)
        document.getElementById("hp").textContent = data.stats[0].base_stat;
        document.getElementById("attack").textContent = data.stats[1].base_stat;
        document.getElementById("defense").textContent = data.stats[2].base_stat;
        document.getElementById("special-attack").textContent = data.stats[3].base_stat;
        document.getElementById("special-defense").textContent = data.stats[4].base_stat;
        document.getElementById("speed").textContent = data.stats[5].base_stat;

        // Check if the "sprite" image element exists
        let sprite = document.getElementById("sprite");
        if (!sprite) {
            // If no image element exists, create a new img element
            sprite = document.createElement("img");
            sprite.id = "sprite"; // Set an ID for the img element
            document.body.appendChild(sprite); // Append the img element to the page body
        }
        
        // Update the image source for the Pokémon sprite
        sprite.src = data.sprites.front_default;

        // Update Pokémon types (e.g., Fire, Water, Grass, etc.)
        typesElement.innerHTML = ""; // Clear old types before updating new ones
        data.types.forEach((typeInfo) => {
            // Create a div element for each Pokémon type
            const typeElement = document.createElement("div");
            // Set the type name in the div element, converted to uppercase
            typeElement.textContent = typeInfo.type.name.toUpperCase();
            // Append the div element to the "types" container
            typesElement.appendChild(typeElement);
        });
    } catch (error) {
        // If there is an error fetching data from the API, log the error and alert the user
        console.error("Error fetching Pokémon data:", error);
        alert("Pokémon not found");
    }
});