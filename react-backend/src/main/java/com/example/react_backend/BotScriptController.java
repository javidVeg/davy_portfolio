package com.example.react_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
public class BotScriptController {

    @GetMapping("/bot_script")
    public List<String> getBotScript() {
        return Arrays.asList(
                "INITIALIZING DAVY'S PORTFOLIO  .  .  .  .",
                "HELLO HUMAN.",
                "I AM CURRENTLY IN THE PROCESS OF RECEIVING UPDATES.",
                "PLEASE COME BACK LATER.",
                "THANK YOU. ♡  ♡  ♡");
    }
}