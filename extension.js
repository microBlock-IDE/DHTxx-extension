({
    name: "DHT11/DHT22", // Category Name
    description: "Temperature and Humidity Sensor",
    author: "ArtronShop",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="dht_read">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ], 
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "DHT sensor library@1.4.6",
        "Adafruit Unified Sensor@1.1.14"
    ]
});
