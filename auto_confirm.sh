#!/usr/bin/expect -f

puts "Starting auto_confirm.sh"
puts "Current directory: [pwd]"

set timeout -1

spawn ts-node src/server.ts -- -I --force
puts "Server started..."

proc handle_prompt {} {
    expect {
        -re {Is .* table created or renamed from another table\?} {
            puts "Prompt detected: Table creation or rename"
            send -- "\r"
            exp_continue
        }
        -re {Accept warnings and push schema to database\?} {
            puts "Prompt detected: Accept warnings"
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