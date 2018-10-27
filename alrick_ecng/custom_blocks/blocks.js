Blockly.Blocks['move_person'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move")
          .appendField(new Blockly.FieldDropdown([["forward","Forward"]]), "move");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['turn_person'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn")
          .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "turn");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(320);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['move_person'] = function(block) {
    var dropdown_move = block.getFieldValue('move');
    // TODO: Assemble JavaScript into code variable.
    var code = 'move_player();\n';
    return code;
  };

  Blockly.JavaScript['turn_person'] = function(block) {
    var dropdown_move = block.getFieldValue('turn');
    // TODO: Assemble JavaScript into code variable.
    var code = 'turn_js("'+dropdown_move+'");\n';
    return code;
  };
