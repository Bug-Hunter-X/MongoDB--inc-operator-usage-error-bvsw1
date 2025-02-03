# MongoDB $inc Operator Usage Error

This example demonstrates an incorrect usage of the MongoDB `$inc` operator.  The `$inc` operator is designed to increment a numeric field by a specified value. However, if used incorrectly, it can lead to unexpected results or errors.

## Bug

The provided code attempts to update a field named `fieldName`, but incorrectly uses the string "value" as the increment value instead of a number.  This results in an error or unexpected behavior.

## Solution

The corrected code ensures that a number is used as the increment value for the `$inc` operator. This ensures the field is correctly incremented numerically.
