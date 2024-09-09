#!/usr/bin/expect -f

set timeout -1

spawn ts-node src/server.ts -- -I --force

expect {
    "Is pages_blocks_private_card_banner table created or renamed from another table?" {
        send -- "\r"
        send -- "yes\r"
    }
    timeout {
    }
}

expect {
    "Accept warnings and push schema to database?" {
        send -- "yes\r"
    }
    timeout {
    }
}

interact
