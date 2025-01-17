export enum VoiceOpCodes {
    identify = 0,
    select_protocol = 1,
    ready = 2,
    heartbeat = 3,
    select_protocol_ack = 4,
    speaking = 5,
    heartbeat_ack = 6,
    resume = 7,
    hello = 8,
    resumed = 9,
    sources = 12,
    client_disconnect = 13,
    session_update = 14,
    media_sink_wants = 15,
    voice_backend_version = 16,
    channel_options_update = 17
}