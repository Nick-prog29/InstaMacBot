<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>
  
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Class SSSBot
   </title>
    <meta name="viewport" content="width=device-width">
    <meta name="title" content="Class SSSBot
   ">
    <meta name="generator" content="docfx 2.58.0.0">
    
    <link rel="shortcut icon" href="../favicon.ico">
    <link rel="stylesheet" href="../styles/docfx.vendor.css">
    <link rel="stylesheet" href="../styles/docfx.css">
    <link rel="stylesheet" href="../styles/main.css">
    <meta property="docfx:navrel" content="../toc.html">
    <meta property="docfx:tocrel" content="toc.html">
    
    
    
  </head>
  <body data-spy="scroll" data-target="#affix" data-offset="120">
    <div id="wrapper">
      <header>
        
        <nav id="autocollapse" class="navbar navbar-inverse ng-scope" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              
              <a class="navbar-brand" href="../index.html">
                <img id="logo" class="svg" src="../logo.svg" alt="">
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
              <form class="navbar-form navbar-right" role="search" id="search">
                <div class="form-group">
                  <input type="text" class="form-control" id="search-query" placeholder="Search" autocomplete="off">
                </div>
              </form>
            </div>
          </div>
        </nav>
        
        <div class="subnav navbar navbar-default">
          <div class="container hide-when-search" id="breadcrumb">
            <ul class="breadcrumb">
              <li></li>
            </ul>
          </div>
        </div>
      </header>
      <div role="main" class="container body-content hide-when-search">
        
        <div class="sidenav hide-when-search">
          <a class="btn toc-toggle collapse" data-toggle="collapse" href="#sidetoggle" aria-expanded="false" aria-controls="sidetoggle">Show / Hide Table of Contents</a>
          <div class="sidetoggle collapse" id="sidetoggle">
            <div id="sidetoc"></div>
          </div>
        </div>
        <div class="article row grid-right">
          <div class="col-md-10">
            <article class="content wrap" id="_content" data-uid="InstaMacBot.classes.SSSBot">
  
  
  <h1 id="InstaMacBot_classes_SSSBot" data-uid="InstaMacBot.classes.SSSBot" class="text-break">Class SSSBot
  </h1>
  <div class="markdown level0 summary"><p sourcefile="obj/api/InstaMacBot.classes.SSSBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">this abstract class define a status bot -&gt; a StartStopBot with status field, so is possible check if is running</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">SSSBot</span></div>
      <div class="level2"><a class="xref" href="InstaMacBot.classes.FollowLikeLastsPicBot.html">FollowLikeLastsPicBot</a></div>
      <div class="level2"><a class="xref" href="InstaMacBot.classes.ScrapeAccountsFromHastagBot.html">ScrapeAccountsFromHastagBot</a></div>
      <div class="level2"><a class="xref" href="InstaMacBot.classes.ScrapeAccountsFromLocationBot.html">ScrapeAccountsFromLocationBot</a></div>
      <div class="level2"><a class="xref" href="InstaMacBot.classes.ScrapeFollowersBot.html">ScrapeFollowersBot</a></div>
      <div class="level2"><a class="xref" href="InstaMacBot.classes.SendDmBot.html">SendDmBot</a></div>
      <div class="level2"><a class="xref" href="InstaMacBot.classes.UnfollowBot.html">UnfollowBot</a></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="InstaMacBot.classes.StartStopBot.html">StartStopBot</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Object.ToString()</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.ReferenceEquals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Object.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Object.MemberwiseClone()</span>
    </div>
  </div>
  <h6><strong>Namespace</strong>: <a class="xref" href="InstaMacBot.classes.html">InstaMacBot.classes</a></h6>
  <h6><strong>Assembly</strong>: InstaMacBot.dll</h6>
  <h5 id="InstaMacBot_classes_SSSBot_syntax">Syntax</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public abstract class SSSBot : StartStopBot</code></pre>
  </div>
  <h3 id="constructors">Constructors
  </h3>
  
  
  <a id="InstaMacBot_classes_SSSBot__ctor_" data-uid="InstaMacBot.classes.SSSBot.#ctor*"></a>
  <h4 id="InstaMacBot_classes_SSSBot__ctor_InstaMacBot_classes_BotConsole_" data-uid="InstaMacBot.classes.SSSBot.#ctor(InstaMacBot.classes.BotConsole)">SSSBot(BotConsole)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public SSSBot(BotConsole console = null)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="InstaMacBot.classes.BotConsole.html">BotConsole</a></td>
        <td><span class="parametername">console</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="fields">Fields
  </h3>
  
  
  <h4 id="InstaMacBot_classes_SSSBot_console" data-uid="InstaMacBot.classes.SSSBot.console">console</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">protected BotConsole console</code></pre>
  </div>
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="InstaMacBot.classes.BotConsole.html">BotConsole</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  
  
  <h4 id="InstaMacBot_classes_SSSBot_status" data-uid="InstaMacBot.classes.SSSBot.status">status</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">protected bool status</code></pre>
  </div>
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  
  
  <a id="InstaMacBot_classes_SSSBot_is_running_" data-uid="InstaMacBot.classes.SSSBot.is_running*"></a>
  <h4 id="InstaMacBot_classes_SSSBot_is_running" data-uid="InstaMacBot.classes.SSSBot.is_running">is_running</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool is_running { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
  </h3>
  
  
  <a id="InstaMacBot_classes_SSSBot_start_" data-uid="InstaMacBot.classes.SSSBot.start*"></a>
  <h4 id="InstaMacBot_classes_SSSBot_start" data-uid="InstaMacBot.classes.SSSBot.start">start()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public abstract void start()</code></pre>
  </div>
  
  
  <a id="InstaMacBot_classes_SSSBot_stop_" data-uid="InstaMacBot.classes.SSSBot.stop*"></a>
  <h4 id="InstaMacBot_classes_SSSBot_stop_System_Boolean_" data-uid="InstaMacBot.classes.SSSBot.stop(System.Boolean)">stop(Boolean)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public abstract void stop(bool save_infos)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">save_infos</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="InstaMacBot.classes.StartStopBot.html">StartStopBot</a>
  </div>
</article>
          </div>
          
          <div class="hidden-sm col-md-2" role="complementary">
            <div class="sideaffix">
              <div class="contribution">
                <ul class="nav">
                </ul>
              </div>
              <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix" id="affix">
                <h5>In This Article</h5>
                <div></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <footer>
        <div class="grad-bottom"></div>
        <div class="footer">
          <div class="container">
            <span class="pull-right">
              <a href="#top">Back to top</a>
            </span>
            
            <span>Generated by <strong>DocFX</strong></span>
          </div>
        </div>
      </footer>
    </div>
    
    <script type="text/javascript" src="../styles/docfx.vendor.js"></script>
    <script type="text/javascript" src="../styles/docfx.js"></script>
    <script type="text/javascript" src="../styles/main.js"></script>
  </body>
</html>