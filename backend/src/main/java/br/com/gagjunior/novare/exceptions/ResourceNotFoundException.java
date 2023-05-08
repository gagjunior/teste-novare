package br.com.gagjunior.novare.exceptions;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(Object id) {
        super("Resource id: " + id + " not found");
    }
}
