function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tQw8x9JhGT":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
SheetsSet('Nama', player.GetVar('TextEntry'));
}

