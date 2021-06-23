<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>
  
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Class FollowLikeLastsPicBot
   </title>
    <meta name="viewport" content="width=device-width">
    <meta name="title" content="Class FollowLikeLastsPicBot
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
            <article class="content wrap" id="_content" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot">
  
  
  <h1 id="InstaMacBot_classes_FollowLikeLastsPicBot" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot" class="text-break">Class FollowLikeLastsPicBot
  </h1>
  <div class="markdown level0 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="4">this class represents a follow, like lasts pics bot that works with a list of username
for each username on list: follow and like lasts pics
objects of this class are mutable</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="InstaMacBot.classes.SSSBot.html">SSSBot</a></div>
    <div class="level2"><span class="xref">FollowLikeLastsPicBot</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="InstaMacBot.classes.StartStopBot.html">StartStopBot</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="InstaMacBot.classes.SSSBot.html#InstaMacBot_classes_SSSBot_status">SSSBot.status</a>
    </div>
    <div>
      <a class="xref" href="InstaMacBot.classes.SSSBot.html#InstaMacBot_classes_SSSBot_console">SSSBot.console</a>
    </div>
    <div>
      <a class="xref" href="InstaMacBot.classes.SSSBot.html#InstaMacBot_classes_SSSBot_is_running">SSSBot.is_running</a>
    </div>
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
  <h5 id="InstaMacBot_classes_FollowLikeLastsPicBot_syntax">Syntax</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public class FollowLikeLastsPicBot : SSSBot, StartStopBot</code></pre>
  </div>
  <h3 id="constructors">Constructors
  </h3>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot__ctor_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.#ctor*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot__ctor_InstaMacBot_classes_UserApi_System_String_InstaMacBot_classes_BotConsole_System_Int32_System_Int32_System_Boolean_System_Int32_System_Int32_System_Int32_System_Action_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.#ctor(InstaMacBot.classes.UserApi,System.String,InstaMacBot.classes.BotConsole,System.Int32,System.Int32,System.Boolean,System.Int32,System.Int32,System.Int32,System.Action)">FollowLikeLastsPicBot(UserApi, String, BotConsole, Int32, Int32, Boolean, Int32, Int32, Int32, Action)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public FollowLikeLastsPicBot(UserApi Utente, string path_bot_save_info, BotConsole tx_console = null, int stop_fails_search_user = 20, int like_lasts_pic = 1, bool follow_accounts = true, int stop_fails_like = 5, int stop_fails_follow = 5, int delay = 40, Action actions = null)</code></pre>
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
        <td><a class="xref" href="InstaMacBot.classes.UserApi.html">UserApi</a></td>
        <td><span class="parametername">Utente</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">the UserApi object that rappresents the bot logged user (the account that will leave likes and follow)</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">path_bot_save_info</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">path where bot will save all files about this userApi: ./Accounts/username</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="InstaMacBot.classes.BotConsole.html">BotConsole</a></td>
        <td><span class="parametername">tx_console</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">che console where the bot will log his process</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">stop_fails_search_user</span></td>
        <td><p>limit of fails when bot is serching an account with the username</p>
<p>the search could fail for some causes: account disables, account banned, ..., instagram blocked the bot chause it is doint too many actions</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">like_lasts_pic</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">numbers of recent post liked on each account inside processing_accounts_list</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">follow_accounts</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">if is true bot will not follow users inside processing_accounts_list</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">stop_fails_like</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">limit of fails when bot is likeing a post, maybe instagram blocked like action</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">stop_fails_follow</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">limit of fails when bot is following a post, maybe instagram blocked follow action</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">delay</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">delay in seconds between each account in processing_accounts_list</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">actions</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">a procedure (void function) called when finish or stopped (used to control element inside the form)</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_get_account_pocessing_counts_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.get_account_pocessing_counts*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_get_account_pocessing_counts" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.get_account_pocessing_counts">get_account_pocessing_counts</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">get the number of accounts where the bot will work leaving likes and follow</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public int get_account_pocessing_counts { get; }</code></pre>
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
        <td><span class="xref">System.Int32</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">the number of accounts inside processing_accounts_list</p>
</td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_get_follow_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.get_follow*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_get_follow" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.get_follow">get_follow</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">fet the number of follow that the bot left</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public int get_follow { get; }</code></pre>
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_get_likes_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.get_likes*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_get_likes" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.get_likes">get_likes</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">fet the number of likes that the bot left</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public int get_likes { get; }</code></pre>
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
        <td><span class="xref">System.Int32</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">the number of likes leaved by the bot</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
  </h3>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_clear_processing_accounts_list_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.clear_processing_accounts_list*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_clear_processing_accounts_list" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.clear_processing_accounts_list">clear_processing_accounts_list()</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">clear the processing_accounts_list</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public void clear_processing_accounts_list()</code></pre>
  </div>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_load_list_from_file_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.load_list_from_file*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_load_list_from_file" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.load_list_from_file">load_list_from_file()</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">load usernames inside processing_accounts_list from a txt using an open file dialog (one username on each line)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public void load_list_from_file()</code></pre>
  </div>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_load_list_from_file_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.load_list_from_file*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_load_list_from_file_System_String_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.load_list_from_file(System.String)">load_list_from_file(String)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">load usernames inside processing_accounts_list from a txt (one username on each line)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public void load_list_from_file(string path)</code></pre>
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">path</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">path of the txt file where are written all usernames where the bot will operate leaving likes and follows</p>
</td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_save_on_file_accounts_followed_list_bot_file_saver_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.save_on_file_accounts_followed_list_bot_file_saver*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_save_on_file_accounts_followed_list_bot_file_saver_System_String_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.save_on_file_accounts_followed_list_bot_file_saver(System.String)">save_on_file_accounts_followed_list_bot_file_saver(String)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">save on file all accounts followed by the bot</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public void save_on_file_accounts_followed_list_bot_file_saver(string path_account)</code></pre>
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">path_account</span></td>
        <td><p>path where are saved all bots files of the user logged in the bot (userapi)</p>
<p>tipically ./Accounts/username/followed (follow like bot).txt</p>
</td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_save_on_file_accounts_not_proccessed_list_bot_file_saver_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.save_on_file_accounts_not_proccessed_list_bot_file_saver*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_save_on_file_accounts_not_proccessed_list_bot_file_saver_System_String_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.save_on_file_accounts_not_proccessed_list_bot_file_saver(System.String)">save_on_file_accounts_not_proccessed_list_bot_file_saver(String)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">save on file all accounts no processed by the bot</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public void save_on_file_accounts_not_proccessed_list_bot_file_saver(string path_account)</code></pre>
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">path_account</span></td>
        <td><p>path where are saved all bots files of the user logged in the bot (userapi)</p>
<p>tipically ./Accounts/username/left accounts (follow like bot).txt</p>
</td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_set_delay_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.set_delay*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_set_delay_System_Int32_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.set_delay(System.Int32)">set_delay(Int32)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">set the delay between each account inside processing_accounts_list</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool set_delay(int i)</code></pre>
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
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">i</span></td>
        <td><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="1" sourceendlinenumber="1">seconds of delay i&gt;=30 </p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
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
        <td><p>true if the delay is setted</p>
<p>false if the delay is not setted: i less than 30</p>
</td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_set_follow_accounts_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.set_follow_accounts*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_set_follow_accounts_System_Boolean_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.set_follow_accounts(System.Boolean)">set_follow_accounts(Boolean)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">set if bot will follow or no the users inside processing_accounts_list</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public void set_follow_accounts(bool i)</code></pre>
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
        <td><span class="parametername">i</span></td>
        <td><p>if true bot will follow</p>
<p>else bot will not follow the accounts</p>
</td>
      </tr>
    </tbody>
  </table>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_set_likes_last_pic_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.set_likes_last_pic*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_set_likes_last_pic_System_Int32_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.set_likes_last_pic(System.Int32)">set_likes_last_pic(Int32)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">set how many recent posts the bot will leave like on each account inside processing_accounts_list</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool set_likes_last_pic(int i)</code></pre>
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
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">i</span></td>
        <td><p>true if the bot setted the new value of like_lasts_pic</p>
<p>false if the bot didn&apos;t cange the value of like_lasts_pic</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
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
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_start_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.start*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_start" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.start">start()</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">start the bot</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public override void start()</code></pre>
  </div>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="InstaMacBot.classes.SSSBot.html#InstaMacBot_classes_SSSBot_start">SSSBot.start()</a></div>
  
  
  <a id="InstaMacBot_classes_FollowLikeLastsPicBot_stop_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.stop*"></a>
  <h4 id="InstaMacBot_classes_FollowLikeLastsPicBot_stop_System_Boolean_" data-uid="InstaMacBot.classes.FollowLikeLastsPicBot.stop(System.Boolean)">stop(Boolean)</h4>
  <div class="markdown level1 summary"><p sourcefile="obj/api/InstaMacBot.classes.FollowLikeLastsPicBot.yml" sourcestartlinenumber="2" sourceendlinenumber="2">stop the bot</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public override void stop(bool save_infos)</code></pre>
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
        <td><p>if true bot will save all infos in files inside path_bot_save_info folder</p>
<p>it saves accounts_not_proccessed_list and followed_list inside 2 dfifferent files</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="InstaMacBot.classes.SSSBot.html#InstaMacBot_classes_SSSBot_stop_System_Boolean_">SSSBot.stop(Boolean)</a></div>
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