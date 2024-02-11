Blockly.Python['dht_read'] = function (block) {
  Blockly.Python.definitions_['import_DHTxx'] = 'import DHTxx';

  var dropdown_model = block.getFieldValue('model');
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');

  var code = `DHTxx.read(DHTxx.${dropdown_model}, ${value_pin})[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['dht_read'] = function (block) {
  Blockly.JavaScript.definitions_['include']['DHT.h'] = '#include <DHT.h>';

  var dropdown_model = block.getFieldValue('model');
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');

  Blockly.JavaScript.definitions_['define']['dht'] = `DHT dht(${value_pin}, ${dropdown_model});`;

  var functionName = Blockly.JavaScript.provideFunction_(
    'DHTxx_read',
    [
      'float ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(uint8_t type) {',
      '  dht.begin();',
      '  if (type == 0) return dht.readTemperature();',
      '  if (type == 1) return dht.readHumidity();',
      '  return -999.0;',
      '}'
    ]);

  var code = `${functionName}(${dropdown_type})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
