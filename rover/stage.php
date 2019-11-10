<?php

$base_url = 'http://localhost/blockly/rover/';

if (isset($_GET['lvl']))
{
    $level = intval($_GET['lvl']);
}
else
{
    $level = 0;
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mars Rover Programming Challenge</title>
  <script src="../blockly_compressed.js"></script>
  <script src="../blocks_compressed.js"></script>
  <script src="../javascript_compressed.js"></script>
  <script src="../msg/js/en.js"></script>
  <script src="<?php echo$base_url?>alrick_ecng/custom_blocks/blocks.js"></script>
  <script src=" ://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
  <script src="<?php echo$base_url?>alrick_ecng/world/levels.js"></script>
  <!--<script src="world.js"></script>-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo$base_url?>alrick_ecng/world/styles.css">
  
  <link rel="stylesheet" href="<?php echo$base_url?>alrick_ecng/world/styles2.css">
  <script>

    var level = <?php echo$level;?>;
  </script>


  <style>
    :root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  /*min-height: 100vh;*/
}

.bg-image {
  background-image: url('https://source.unsplash.com/WEQbe2jBg40/600x1200');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
.row
{
  margin-top : 30px;
}
  </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container">
        <a class="navbar-brand" href="#">Mars Rover Programming Challenge</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link" href="index.php">Home</span>
                    </a>
            </li>
            <li class="nav-item  active">
                <a class="nav-link" href="levels.php">Levels
                  <span class="sr-only">(current)</span>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <div class="container" id="level_grid">

        <!-- Page Heading -->
        <h1 class="my-4">LEVEL <span id='lvlnum'></span>
        </h1>
        <div id='dwin' class="d-none alert alert-success">
            <strong>Success!</strong> You have completed this level proceed to the next level.
        </div>
        <div id='dlose' class="d-none alert alert-warning">
            Incorrect instructions, please try again.
        </div>
        <p>Send instructions across space to the MARS Rover to guide it to the Mysterious Element.</p>
      
        <!--<p>&rarr; More info on <a href="https://developers.google.com/blockly/guides/configure-blockly/web/fixed-size">injecting fixed-sized Blockly</a>&hellip;</p>-->
      
        <div class="row">
            <div class="col-6">
                <button class="btn btn-success" onclick="runCode()">Send Instructions</button>
                <button class="btn btn-primary" onclick="reset()">Clear</button>
            </div>
            <div class="col-6">
                <a id='nllink' class="btn btn-primary disabled" href="http://localhost/blockly/rover/rover/stage.php?lvl=<?php echo$level+1;?> " role="button">Next Level</a>
            </div>
        </div>
        
        <p> Blocks: <span id='blocknum'>0</span>/100</p>
        <div id = "world_container">
          
          <div id="worldDiv" style="height: 400px; width: 400px;">
          </div>
        
        </div>
      
        <!--<div id = "block_world"></div>-->
      
        <div id="blocklyDiv" style="height: 400px; width: 400px;"></div>
        
        <xml id="toolbox" style="display: none">
          
          <block type="move_person"></block>
          <!--<block type="turn_person"></block>
          <block type="logic_compare"></block>
          <block type="controls_repeat_ext"></block>
          <block type="math_number">
            <field name="NUM">123</field>
          </block>
          <block type="math_arithmetic"></block>
          <block type="text"></block>
          <block type="text_print"></block>
        -->
        </xml>

    </div>

    <script>
      var demoWorkspace;
      //function blockly_init()
      //{
        demoWorkspace = Blockly.inject('blocklyDiv',
            {media: '../../media/',
            toolbox: document.getElementById('toolbox')});
        
        demoWorkspace.addChangeListener(count_blocks);
        
        Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
                                  demoWorkspace);
      //}
  
      //blockly_init();
  
  
      function runCode() {
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var code = "init();"+Blockly.JavaScript.workspaceToCode(demoWorkspace)+"end_check();";
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        try {
          
          eval(code);
        } catch (e) {
          alert(e);
        }
      }
  
      function reset()
      {
        Blockly.mainWorkspace.clear();
      }
  
      function count_blocks()
      {
        var count = Blockly.mainWorkspace.getAllBlocks().length;
        document.getElementById("blocknum").innerHTML = count;
        console.log(count);
      }
  
  
      
    </script>
    <script src="<?php echo$base_url?>alrick_ecng/world/world2.js"></script>
</body>

</html>