from tkinter.ttk import Widget
from django import forms
from .models import Contacto, Producto, Categoria
from .validators import MaxSizeFileValidator
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ValidationError

class ContactoForm(forms.ModelForm):
    class Meta:
        model = Contacto
        # fields = ['nombre', 'correo'', 'tipo_consulta', 'mensaje', 'avisos']
        fields = '__all__'



class ProductoForm(forms.ModelForm):

    nombreProducto = forms.CharField(min_length=3, max_length=50)
    imagen = forms.ImageField(required = False, validators=[MaxSizeFileValidator(max_file_size=6)])
    precioProducto = forms.IntegerField(min_value=1, max_value=1500000)

    def clean_nombre(self):
        nombreProducto = self.cleaned_data["nombreProducto"]
        existe = Producto.objects.filter(nombre__iexact=nombreProducto).exists()

        if existe:
            raise forms.ValidationError("Este nombre ya existe")
        return nombreProducto

    class Meta:
        model = Producto
        fields = '__all__'
    
        
        
class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']
