package com.picpaysimplificado.exceptions;

import lombok.Getter;

@Getter
public class UnauthorizedTransactionException extends Exception {
    private final int statusCode;

    public UnauthorizedTransactionException() {
        super("Unauthorized transaction.");
        this.statusCode = 403;
    }
}
