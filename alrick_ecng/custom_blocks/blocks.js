Blockly.Blocks['move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move")
          .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "move");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['move'] = function(block) {
    var dropdown_move = block.getFieldValue('move');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_move+';\n';
    return code;
  };