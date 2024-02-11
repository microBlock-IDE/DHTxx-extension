Blockly.defineBlocksWithJsonArray([
{
  "type": "dht_read",
  "message0": "%1 pin %2 read %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "model",
      "options": [
        [
          "DHT11",
          "DHT11"
        ],
        [
          "DHT22",
          "DHT22"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "temperature (°C)",
          "0"
        ],
        [
          "humidity (%RH)",
          "1"
        ]
      ]
    },
  ],
  "output": "Number",
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
}
]);
