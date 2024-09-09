#!/usr/bin/expect -f

puts "Starting auto_confirm.sh"

set timeout -1

spawn ts-node src/server.ts -- -I --force

proc handle_prompt {} {
    expect {
        -re "Is .* table created or renamed from another table?" {
            send -- "\r"   
            send -- "yes\r" 
            handle_prompt  
        }
        "Accept warnings and push schema to database?" {
            send -- "yes\r" 
        }
        timeout {
            
        }
    }
}

interact
