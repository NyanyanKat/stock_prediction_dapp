use anchor_lang::solana_program::clock::UnixTimestamp;

pub const MASTER_SEED: &[u8] = b"master";

pub const BET_SEED: &[u8] = b"bet";

// The closer we are to expiry the more chances the player will win
// Adjust this to make it more fair
pub const MINIMUM_REMAINING_TIME_UNTIL_EXPIRY: UnixTimestamp = 120;

pub const MAXIMUM_CLAIMABLE_PERIOD: UnixTimestamp = 300;

