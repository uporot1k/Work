AddEventHandler("iblock", "OnAfterIBlockElementAdd", Array("MyClass", "OnAfterIBlockElementAddHandler"));

class MyClass
{
    // создаем обработчик события "OnAfterIBlockElementAdd"
    function OnAfterIBlockElementAddHandler(&$arFields)
    {
        if($arFields["ID"]>0)
             AddMessage2Log("Запись с кодом ".$arFields["ID"]." добавлена.");
        else
             AddMessage2Log("Ошибка добавления записи (".$arFields["RESULT_MESSAGE"].").");
    }
}