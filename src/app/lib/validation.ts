export function validateEmail($email: string) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test($email);
}

export function validatePassword($password: string) {
    return $password.length >= 8;
}