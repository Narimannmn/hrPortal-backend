#!/usr/bin/expect -f

puts "Starting auto_confirm.sh"

set timeout -1

spawn ts-node src/server.ts -- -I --force

proc handle_prompt {} {
    expect {
        -re ".*Is .* table created or renamed from another table\?" {
            send -- "\r"
            exp_continue
        }
        -re ".*Accept warnings and push schema to database\?" {
            send -- "yes\r"
            exp_continue
        }
        timeout {
            puts "Timeout occurred"
        }
        eof {
            puts "Process completed"
        }
    }
}

handle_prompt
interact
