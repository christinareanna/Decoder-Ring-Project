<h1>Project: Decoder Ring</h1><blockquote>
<p>You are planning a surprise birthday party for one of your friends who <em>loves</em> escape rooms and puzzles. What better way to practice your new coding skills then to build an application that will help you encode and decode all kinds of fun messages?</p>
</blockquote>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 94.5px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/7a945612b738d811880b0244ee5ec0a2-image.png" alt="image.png" style="width: 97.8836px; height: 92.5px; max-width: none;"></div></zoomable-image></p>
<p>This project is designed to test your ability to build tricky algorithms as well as write unit tests with Mocha &amp; Chai. Before taking on this module, you should be comfortable with the following:</p>
<ul>
<li>Installing packages via NPM.</li>
<li>Modifying the <code>package.json</code> file with new scripts.</li>
<li>Running tests from the command line.</li>
<li>Writing JavaScript functions.</li>
<li>Writing tests for specific functions.</li>
<li>Iterating through strings, objects, and arrays.</li>
<li>Debugging through reading errors and using the VSCode debugger.</li>
</ul>
<p>You will not need to make any edits to HTML or CSS for this project.</p>
<h2>Project setup</h2><p>Click on the "USE YOUR IDE" button at the top of this page and follow the instructions to use the <code>qualified-attach</code> application to download and edit your code using your Visual Studio Code editor.</p>
<p>Additionally, if you wish to run the code or run the tests on your own machine you may take the following steps after using the <code>qualified-attach</code> application.</p>
<p>After running <code>qualified-attach</code> you can open a new terminal and <code>cd</code> into the folder with the project code. By default the name of that folder is _Project_Decoder_Ring<em>1</em>.</p>
<p>To install dependencies locally run the command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm i
</code></pre>
</div></div><p>To run the tests, you can run the following command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm test
</code></pre>
</div></div><p>To watch how the code you write affects the application website, you can run the following command. This command will start a server and take over your terminal window. To stop the server from running, you can press <code>Ctrl + C</code>.</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm start
</code></pre>
</div></div><h2>Instructions</h2><p>You are tasked with building functions for an application that will either encode or decode a string using a variety of ciphers. For each cipher, you should make a series of tests using Mocha &amp; Chai to confirm that your cipher works.</p>
<p>All of the functions can be found inside of the <code>src/</code> directory. Each function and cipher is described below.</p>
<p>Below is a checklist of what you need to accomplish.</p>
<ul>
<li>[ ] Complete the <code>caesar()</code> function.</li>
<li>[ ] Write tests for the <code>caesar()</code> function.</li>
<li>[ ] Complete the <code>polybius()</code> function.</li>
<li>[ ] Write tests for the <code>polybius()</code> function.</li>
<li>[ ] Complete the <code>substitution()</code> function.</li>
<li>[ ] Write tests for the <code>substitution()</code> function.</li>
</ul>
<h3>Caesar Shift</h3><p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 42.1333px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/b6a94b251bbbe6dae7e3e84ed8be33a4-image.png" alt="image.png" style="width: 95.2532px; height: 40.1333px; max-width: none;"></div></zoomable-image></p>
<p>The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.</p>
<p>For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".</p>
<pre><code>"thinkful" -&gt; "wklqnixo"
</code></pre><p>When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.</p>
<h4>caesar()</h4><p>The <code>caesar()</code> function in the <code>src/caesar.js</code> file has three parameters:</p>
<ul>
<li><em>input</em> refers to the inputted text to be encoded or decoded.</li>
<li><em>shift</em> refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").</li>
<li><em>encode</em> refers to whether you should encode or decode the message. By default it is set to <code>true</code>.</li>
</ul>
<p>When building the function, keep the following constraints and rules in mind:</p>
<ul>
<li>If the <code>shift</code> value is not present, equal to <code>0</code>, less than <code>-25</code>, or greater than <code>25</code>, the function should return <code>false</code>.</li>
<li>Spaces should be maintained throughout, as should other non-alphabetic symbols.</li>
<li>Capital letters can be ignored.</li>
<li>If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").</li>
</ul>
<h4>Examples</h4><div class="language-tabset"><div class="language-tab language-js"><pre><code class="lang-js">caesar(<span class="hljs-string">"thinkful"</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//&gt; 'wklqnixo'</span>
caesar(<span class="hljs-string">"thinkful"</span>, -<span class="hljs-number">3</span>); <span class="hljs-comment">//&gt; 'qefkhcri'</span>
caesar(<span class="hljs-string">"wklqnixo"</span>, <span class="hljs-number">3</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; 'thinkful'</span>

caesar(<span class="hljs-string">"This is a secret message!"</span>, <span class="hljs-number">8</span>); <span class="hljs-comment">//&gt; 'bpqa qa i amkzmb umaaiom!'</span>
caesar(<span class="hljs-string">"BPQA qa I amkzmb umaaiom!"</span>, <span class="hljs-number">8</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; 'this is a secret message!'</span>

caesar(<span class="hljs-string">"thinkful"</span>); <span class="hljs-comment">//&gt; false</span>
caesar(<span class="hljs-string">"thinkful"</span>, <span class="hljs-number">99</span>); <span class="hljs-comment">//&gt; false</span>
caesar(<span class="hljs-string">"thinkful"</span>, -<span class="hljs-number">26</span>); <span class="hljs-comment">//&gt; false</span>
</code></pre>
</div></div><h3>Polybius Square</h3><table>
<thead>
<tr>
<th></th>
<th><strong>1</strong></th>
<th><strong>2</strong></th>
<th><strong>3</strong></th>
<th><strong>4</strong></th>
<th><strong>5</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1</strong></td>
<td>A</td>
<td>B</td>
<td>C</td>
<td>D</td>
<td>E</td>
</tr>
<tr>
<td><strong>2</strong></td>
<td>F</td>
<td>G</td>
<td>H</td>
<td>I/J</td>
<td>K</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td>L</td>
<td>M</td>
<td>N</td>
<td>O</td>
<td>P</td>
</tr>
<tr>
<td><strong>4</strong></td>
<td>Q</td>
<td>R</td>
<td>S</td>
<td>T</td>
<td>U</td>
</tr>
<tr>
<td><strong>5</strong></td>
<td>V</td>
<td>W</td>
<td>X</td>
<td>Y</td>
<td>Z</td>
</tr>
</tbody>
</table>
<p>The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".</p>
<p>Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.</p>
<pre><code>"thinkful" -&gt; "4432423352125413"
</code></pre><p>When decoding the message, each pair of numbers is translated using the coordinates.</p>
<h4>polybius()</h4><p>The <code>polybius()</code> function in the <code>src/polybius.js</code> file has two parameters:</p>
<ul>
<li><em>input</em> refers to the inputted text to be encoded or decoded.</li>
<li><em>encode</em> refers to whether you should encode or decode the message. By default it is set to <code>true</code>.</li>
</ul>
<p>When building the function, keep the following constraints and rules in mind:</p>
<ul>
<li>You are welcome to assume that <em>no additional symbols will be included as part of the input.</em> Only spaces and letters will be included.</li>
<li>When encoding, your output should <em>still be a string.</em></li>
<li>When decoding, the number of characters in the string <em>excluding spaces</em> should be even. Otherwise, return <code>false</code>.</li>
<li>Spaces should be maintained throughout.</li>
<li>Capital letters can be ignored.</li>
<li>The letters "I" and "J" share a space. When encoding, both letters can be converted to <code>42</code>, but when decoding, both letters should somehow be shown.</li>
</ul>
<h4>Examples</h4><div class="language-tabset"><div class="language-tab language-js"><pre><code class="lang-js">polybius(<span class="hljs-string">"thinkful"</span>); <span class="hljs-comment">//&gt; "4432423352125413"</span>
polybius(<span class="hljs-string">"Hello world"</span>); <span class="hljs-comment">//&gt; '3251131343 2543241341'</span>

polybius(<span class="hljs-string">"3251131343 2543241341"</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; "hello world"</span>
polybius(<span class="hljs-string">"4432423352125413"</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; "th(i/j)nkful</span>
polybius(<span class="hljs-string">"44324233521254134"</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; false</span>
</code></pre>
</div></div><h3>Substitution Cipher</h3><p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 13.1429px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/19c12a6ee38ceddd82d75e12edf53189-image.png" alt="image.png" style="width: 84.7826px; height: 11.1429px; max-width: none;"></div></zoomable-image></p>
<p>The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.</p>
<p>For example, in the image above, the word "HELLO" would be translated as follows:</p>
<ul>
<li>"H" becomes "R".</li>
<li>"E" becomes "M".</li>
<li>"L" becomes "W".</li>
<li>"O" becomes "L".</li>
</ul>
<p>This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.</p>
<h4>substitution()</h4><p>The <code>substitution()</code> function in the <code>src/substitution.js</code> file has three parameters:</p>
<ul>
<li><em>input</em> refers to the inputted text to be encoded or decoded.</li>
<li><em>alphabet</em> refers to substitution alphabet.</li>
<li><em>encode</em> refers to whether you should encode or decode the message. By default it is set to <code>true</code>.</li>
</ul>
<p>When building the function, keep the following constraints and rules in mind:</p>
<ul>
<li>The input could include spaces and letters as well as special characters such as <code>#</code>, <code>$</code>, <code>*</code>, etc.</li>
<li>Spaces should be maintained throughout.</li>
<li>Capital letters can be ignored.</li>
<li>The <code>alphabet</code> parameter must be a string of exactly 26 characters, which could include special characters such as <code>#</code>, <code>$</code>, <code>*</code>, etc. Otherwise, it should return <code>false</code>.</li>
<li>All the characters in the <code>alphabet</code> parameter <em>must be unique.</em> Otherwise, it should return <code>false</code>.</li>
</ul>
<h4>Examples</h4><div class="language-tabset"><div class="language-tab language-js"><pre><code class="lang-js">substitution(<span class="hljs-string">"thinkful"</span>, <span class="hljs-string">"xoyqmcgrukswaflnthdjpzibev"</span>); <span class="hljs-comment">//&gt; 'jrufscpw'</span>
substitution(<span class="hljs-string">"You are an excellent spy"</span>, <span class="hljs-string">"xoyqmcgrukswaflnthdjpzibev"</span>); <span class="hljs-comment">//&gt; 'elp xhm xf mbymwwmfj dne'</span>
substitution(<span class="hljs-string">"jrufscpw"</span>, <span class="hljs-string">"xoyqmcgrukswaflnthdjpzibev"</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; 'thinkful'</span>

substitution(<span class="hljs-string">"message"</span>, <span class="hljs-string">"$wae&amp;zrdxtfcygvuhbijnokmpl"</span>); <span class="hljs-comment">//&gt; "y&amp;ii$r&amp;"</span>
substitution(<span class="hljs-string">"y&amp;ii$r&amp;"</span>, <span class="hljs-string">"$wae&amp;zrdxtfcygvuhbijnokmpl"</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//&gt; "message"</span>

substitution(<span class="hljs-string">"thinkful"</span>, <span class="hljs-string">"short"</span>); <span class="hljs-comment">//&gt; false</span>
substitution(<span class="hljs-string">"thinkful"</span>, <span class="hljs-string">"abcabcabcabcabcabcabcabcyz"</span>); <span class="hljs-comment">//&gt; false</span>
</code></pre>
</div></div><p><strong>Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.</p>
</div>